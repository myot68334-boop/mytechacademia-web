'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { auth, db } from "../../../lib/firebase";
import { useTechAcademia } from "../../../components/tech-academia/use-tech-academia";
import { PageHeader } from "../../../components/tech-academia/page-header";
import { SectionShell } from "../../../components/tech-academia/section-shell";

export default function TechAcademiaRegisterPage() {
  const router = useRouter();
  const { user, loading } = useTechAcademia();

  const [formData, setFormData] = useState({
    name: "",
    team: "",
    email: "",
    role: "",
    password: "",
    confirm: "",
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/tech-academia/dashboard");
    }
  }, [loading, user, router]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submitting) return;

    if (formData.password !== formData.confirm) {
      setFormError("Passwords do not match.");
      return;
    }

    setFormError(null);
    setSubmitting(true);

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password
      );

      if (formData.name.trim()) {
        await updateProfile(credential.user, {
          displayName: formData.name.trim(),
        });
      }

      const displayName = formData.name.trim();
      const email = credential.user.email ?? formData.email.trim();
      const userDocRef = doc(
        db,
        "users",
        credential.user.uid
      );

      await setDoc(
        userDocRef,
        {
          uid: credential.user.uid,
          email,
          displayName,
          plan: "free",
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      router.replace("/tech-academia/dashboard");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Registration failed.";

      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative isolate min-h-screen bg-midnight-950 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-35"
      />

      <SectionShell className="border-t-0">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">
          <PageHeader
            eyebrow="Create Account"
            title="Join Tech Academia Version 2"
            description="Set up your studio profile, invite multi-language cohorts, and unlock AI-guided technical learning workflows."
            actions={
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-aurora-300/60 hover:bg-white/20"
                href="/tech-academia/login"
              >
                Already have an account? Sign in
              </Link>
            }
          />

          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-10 shadow-glow backdrop-blur">
            <form className="space-y-6" onSubmit={handleRegister}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white" htmlFor="name">
                    Full name
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                    id="name"
                    name="name"
                    placeholder="Aiko Tanaka"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white" htmlFor="team">
                    Studio / organisation
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                    id="team"
                    name="team"
                    placeholder="Kyoto Design Lab"
                    value={formData.team}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white" htmlFor="email">
                    Work email
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@studio.jp"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white" htmlFor="role">
                    Role / discipline
                  </label>
                  <select
                    className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="">Select discipline</option>
                    <option value="architecture">Architecture</option>
                    <option value="structural">Structural engineering</option>
                    <option value="bim">BIM coordination</option>
                    <option value="quantity">Quantity survey</option>
                    <option value="education">Technical education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white" htmlFor="confirm">
                    Confirm password
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/20 bg-midnight-900/60 px-4 py-3 text-base text-white transition focus:border-aurora-300/60 focus:outline-none focus:ring-2 focus:ring-aurora-300/40"
                    id="confirm"
                    name="confirm"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    value={formData.confirm}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {formError ? (
                <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {formError}
                </p>
              ) : null}

              <button
                className="w-full rounded-full bg-aurora-500 px-6 py-3 text-sm font-semibold text-midnight-950 shadow-glow transition hover:bg-aurora-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Creating account…" : "Create account"}
              </button>

              <p className="text-center text-sm text-slate-300">
                By registering you agree to our{" "}
                <Link className="text-aurora-200 transition hover:text-white" href="/terms">
                  terms
                </Link>{" "}
                and{" "}
                <Link className="text-aurora-200 transition hover:text-white" href="/privacy">
                  privacy policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
