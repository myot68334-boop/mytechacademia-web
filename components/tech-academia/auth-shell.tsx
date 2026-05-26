'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { TechAcademiaProvider, useTechAcademiaContext } from './auth-provider';

const PUBLIC_PATHS = new Set([
  '/tech-academia',
  '/tech-academia/login',
  '/tech-academia/register',
  '/tech-academia/pricing',
  '/tech-academia/courses',
]);

function isProtectedPath(pathname: string) {
  if (pathname.startsWith('/tech-academia/courses')) {
    return false;
  }

  return pathname.startsWith('/tech-academia') && !PUBLIC_PATHS.has(pathname);
}

function TechAcademiaSessionShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, profile, loading, signOut } = useTechAcademiaContext();
  const [loggingOut, setLoggingOut] = useState(false);
  const protectedPath = isProtectedPath(pathname);

  useEffect(() => {
    if (!loading && protectedPath && !user) {
      router.replace('/tech-academia/login');
    }
  }, [loading, protectedPath, router, user]);

  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await signOut();
      router.replace('/tech-academia/login');
    } finally {
      setLoggingOut(false);
    }
  };

  if (loading && protectedPath) {
    return (
      <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-aurora-200">
            Loading workspace
          </p>
        </div>
      </main>
    );
  }

  if (protectedPath && !user) {
    return null;
  }

  return (
    <>
      {protectedPath ? (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight-950/90 text-slate-100 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <Link className="text-sm font-semibold uppercase tracking-[0.3em] text-aurora-200" href="/tech-academia/dashboard">
              Tech Academia
            </Link>
            <nav className="flex flex-wrap items-center gap-3 text-sm" aria-label="Dashboard">
              <Link className="text-slate-200 transition hover:text-white" href="/tech-academia/dashboard">
                Dashboard
              </Link>
              <Link className="text-slate-200 transition hover:text-white" href="/tech-academia/chat">
                AI studio
              </Link>
              <Link className="text-slate-200 transition hover:text-white" href="/tech-academia/courses">
                Courses
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <span className="max-w-[12rem] truncate text-sm text-slate-300">
                {profile?.displayName || user?.email || 'Member'}
              </span>
              <button
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
                type="button"
                onClick={handleLogout}
                disabled={loggingOut}
              >
                {loggingOut ? 'Signing out...' : 'Log out'}
              </button>
            </div>
          </div>
        </header>
      ) : null}
      {children}
    </>
  );
}

export function TechAcademiaAuthShell({ children }: { children: ReactNode }) {
  return (
    <TechAcademiaProvider>
      <TechAcademiaSessionShell>{children}</TechAcademiaSessionShell>
    </TechAcademiaProvider>
  );
}
