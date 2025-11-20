"use client";

import { GithubIcon } from "@/components/icons/github-icon";
import { GoogleIcon } from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

export function OAuthentication() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setLoadingProvider("google");
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to sign in with Google"
      );
      setLoadingProvider(null);
    }
  };

  const handleGitHubSignIn = async () => {
    setLoadingProvider("github");
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to sign in with GitHub"
      );
      setLoadingProvider(null);
    }
  };

  return (
    <div className="space-y-3 mb-6">
      <Button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loadingProvider !== null}
        className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium disabled:opacity-50"
      >
        <GoogleIcon />
        {loadingProvider === "google" ? "Signing in..." : "Continue with Google"}
      </Button>
      <Button
        type="button"
        onClick={handleGitHubSignIn}
        disabled={loadingProvider !== null}
        className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium disabled:opacity-50"
      >
        <GithubIcon />
        {loadingProvider === "github" ? "Signing in..." : "Continue with Github"}
      </Button>
    </div>
  );
}
