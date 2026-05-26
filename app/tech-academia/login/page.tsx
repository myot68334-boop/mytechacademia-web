'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, authPersistence, googleProvider } from "../../../lib/firebase";
import { useTechAcademia } from "../../../components/tech-academia/use-tech-academia";
import { PageHeader } from "../../../components/tech-academia/page-header";
import { SectionShell } from "../../../components/tech-academia/section-shell";

export default function TechAcademiaLoginPage() {
  const router = useRouter();
  const { user, loading } = useTechAcademia();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/tech-academia/dashboard");
    }
  }, [loading, user, router]);

  const handleEmailLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setFormError(null);
    setSubmitting(true);
    try {
      await authPersistence;
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/tech-academia/dashboard");
    } catch (error) {
      const message = (error as Error).message ?? "Unable to sign in.";
      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (submitting) return;
    setFormError(null);
    setSubmitting(true);
    try {
      await authPersistence;
      await signInWithPopup(auth, googleProvider);
      router.replace("/tech-academia/dashboard");
    } catch (error) {
      const message = (error as Error).message ?? "Google sign-in failed.";
      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-35" />

      <SectionShell className="border-t-0">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">
          <PageHeader
            eyebrow="Member Access"
            title="Sign in to Tech Academia"
            description="Log in to review your guided study workspace, AI drafts, and multi-language tutoring sessions."
            actions={
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20"
                href="/tech-academia/register"
              >
                Need an account? Register
              </Link>
            }
          />

          <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-10 shadow-glow backdrop-blur">
            <form className="space-y-6" onSubmit={handleEmailLogin}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <label className="font-semibold" htmlFor="password">
                    Password
                  </label>
                  <span className="text-aurora-200">Secure access</span>
                </div>
                <input
                  className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>

              {formError ? <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{formError}</p> : null}

              <button
                className="w-full rounded-full bg-aurora-500 px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'Signing in…' : 'Sign in'}
              </button>

              <div className="relative">
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-white/10" />
                <span className="relative mx-auto block w-fit bg-transparent px-3 text-xs uppercase tracking-[0.3em] text-slate-300">
                  or
                </span>
              </div>

              <button
                className="flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
                type="button"
                onClick={handleGoogleLogin}
                disabled={submitting}
              >
                <span>Continue with Google</span>
              </button>

              <p className="text-center text-sm text-slate-300">
                Looking for guided sessions? <Link className="text-aurora-200 transition hover:text-white" href="/tech-academia/courses">Explore courses</Link>
              </p>
            </form>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
