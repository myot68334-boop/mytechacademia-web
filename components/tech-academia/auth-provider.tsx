'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  onAuthStateChanged,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import type { ChatMessage, ChatSession, QuizScore, TechAcademiaProfile } from '../../types/tech-academia';
import { auth, db } from '../../lib/firebase';
import { techAcademiaCourses } from '../../data/tech-academia-courses';

const DEFAULT_PROFILE: TechAcademiaProfile = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
  role: 'Learner',
  progress: {},
  plan: 'free',
};

type TechAcademiaContextValue = {
  user: User | null;
  profile: TechAcademiaProfile | null;
  loading: boolean;
  chats: ChatSession[];
  activeChatId: string | null;
  setActiveChatId: (id: string | null) => void;
  saveChat: (chat: { id?: string; title: string; messages: ChatMessage[]; quizScore?: QuizScore }) => Promise<string | null>;
  loadChat: (chatId: string) => Promise<ChatSession | null>;
  deleteChat: (chatId: string) => Promise<void>;
  updateProfile: (data: Partial<TechAcademiaProfile>) => Promise<void>;
  updateProgress: (courseId: string, completedLessons: number) => Promise<void>;
  signOut: () => Promise<void>;
};

const TechAcademiaContext = createContext<TechAcademiaContextValue | undefined>(undefined);

function shapeProfile(
  data: Partial<TechAcademiaProfile> | undefined,
  fallback: Pick<TechAcademiaProfile, 'uid' | 'email' | 'displayName'>,
): TechAcademiaProfile {
  return {
    ...DEFAULT_PROFILE,
    uid: data?.uid ?? fallback.uid,
    email: data?.email ?? fallback.email,
    displayName: data?.displayName ?? fallback.displayName,
    photoURL: data?.photoURL ?? DEFAULT_PROFILE.photoURL,
    role: data?.role ?? DEFAULT_PROFILE.role,
    progress: data?.progress ?? {},
    plan: data?.plan ?? DEFAULT_PROFILE.plan,
    createdAt: data?.createdAt,
    updatedAt: data?.updatedAt,
  };
}

export function TechAcademiaProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<TechAcademiaProfile | null>(null);
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setChats([]);
      setActiveChatId(null);
      return;
    }

    const profileFallback = {
      uid: user.uid,
      email: user.email ?? '',
      displayName: user.displayName ?? user.email ?? '',
    };
    const userDocRef = doc(db, 'users', user.uid);

    const unsubscribeProfile = onSnapshot(userDocRef, (snapshot) => {
      if (snapshot.exists()) {
        setProfile(shapeProfile(snapshot.data() as TechAcademiaProfile, profileFallback));
      } else {
        const initialProfile = {
          uid: user.uid,
          email: user.email ?? '',
          displayName: user.displayName ?? user.email ?? '',
          plan: 'free' as const,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };
        void setDoc(userDocRef, initialProfile, { merge: true });
        setProfile(shapeProfile(initialProfile, profileFallback));
      }
    });

    const chatsCollection = collection(userDocRef, 'chats');
    const chatsQuery = query(chatsCollection);
    const unsubscribeChats = onSnapshot(chatsQuery, (snapshot) => {
      const nextChats: ChatSession[] = snapshot.docs.map((docSnapshot) => {
        const data = docSnapshot.data();
        const createdAt = data.createdAt?.toMillis ? data.createdAt.toMillis() : Date.now();
        const updatedAt = data.updatedAt?.toMillis ? data.updatedAt.toMillis() : createdAt;
        return {
          id: docSnapshot.id,
          title: data.title ?? 'Untitled session',
          summary: data.summary ?? '',
          createdAt,
          updatedAt,
          messages: (data.messages ?? []) as ChatMessage[],
          quizScore: data.quizScore as QuizScore | undefined,
        };
      });
      setChats(nextChats.sort((a, b) => b.updatedAt - a.updatedAt));
    });

    return () => {
      unsubscribeProfile();
      unsubscribeChats();
    };
  }, [user]);

  const updateProfile = useCallback(
    async (data: Partial<TechAcademiaProfile>) => {
      if (!user) return;
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, { ...data, updatedAt: serverTimestamp() }, { merge: true });
    },
    [user],
  );

  const updateProgress = useCallback(
    async (courseId: string, completedLessons: number) => {
      if (!user) return;
      const totalLessons = techAcademiaCourses.find((course) => course.id === courseId)?.totalLessons ?? completedLessons;
      const clamped = Math.max(0, Math.min(completedLessons, totalLessons));
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(
        userDocRef,
        {
          progress: {
            [courseId]: clamped,
          },
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );
    },
    [user],
  );

  const signOut = useCallback(async () => {
    setActiveChatId(null);
    setUser(null);
    setProfile(null);
    setChats([]);
    await firebaseSignOut(auth);
  }, []);

  const loadChat = useCallback(
    async (chatId: string) => {
      if (!user) return null;
      const chatDocRef = doc(db, 'users', user.uid, 'chats', chatId);
      const snapshot = await getDoc(chatDocRef);
      if (!snapshot.exists()) return null;
      const data = snapshot.data();
      const createdAt = data.createdAt?.toMillis ? data.createdAt.toMillis() : Date.now();
      const updatedAt = data.updatedAt?.toMillis ? data.updatedAt.toMillis() : createdAt;
      const chat: ChatSession = {
        id: snapshot.id,
        title: data.title ?? 'Untitled session',
        summary: data.summary ?? '',
        createdAt,
        updatedAt,
        messages: (data.messages ?? []) as ChatMessage[],
        quizScore: data.quizScore as QuizScore | undefined,
      };
      setActiveChatId(chat.id);
      return chat;
    },
    [user],
  );

  const saveChat = useCallback(
    async ({ id, title, messages, quizScore }: { id?: string; title: string; messages: ChatMessage[]; quizScore?: QuizScore }) => {
      if (!user) return null;
      const userDocRef = doc(db, 'users', user.uid);
      const chatsCollection = collection(userDocRef, 'chats');
      const chatDocRef = id ? doc(chatsCollection, id) : doc(chatsCollection);
      const chatData = {
        title: title || 'Untitled session',
        messages,
        summary: messages.find((message) => message.sender === 'assistant')?.content?.slice(0, 160) ?? '',
        updatedAt: serverTimestamp(),
        ...(quizScore ? { quizScore } : {}),
        ...(id ? {} : { createdAt: serverTimestamp() }),
      };
      await setDoc(
        chatDocRef,
        chatData,
        { merge: true },
      );
      setActiveChatId(chatDocRef.id);
      return chatDocRef.id;
    },
    [user],
  );

  const deleteChat = useCallback(
    async (chatId: string) => {
      if (!user) return;
      const chatDocRef = doc(db, 'users', user.uid, 'chats', chatId);
      await deleteDoc(chatDocRef);
      if (activeChatId === chatId) {
        setActiveChatId(null);
      }
    },
    [user, activeChatId],
  );

  const value = useMemo<TechAcademiaContextValue>(
    () => ({
      user,
      profile,
      loading,
      chats,
      activeChatId,
      setActiveChatId,
      saveChat,
      loadChat,
      deleteChat,
      updateProfile,
      updateProgress,
      signOut,
    }),
    [user, profile, loading, chats, activeChatId, saveChat, loadChat, deleteChat, updateProfile, updateProgress, signOut],
  );

  return <TechAcademiaContext.Provider value={value}>{children}</TechAcademiaContext.Provider>;
}

export function useTechAcademiaContext() {
  const context = useContext(TechAcademiaContext);
  if (!context) {
    throw new Error('useTechAcademiaContext must be used within TechAcademiaProvider');
  }
  return context;
}
