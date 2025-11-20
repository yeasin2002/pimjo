"use client";

import { GithubIcon } from "@/components/icons/github-icon";
import { GoogleIcon } from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";

export function OAuthentication() {
  return (
    <div className="space-y-3 mb-6">
      <Button
        type="button"
        className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium"
      >
        <GoogleIcon />
        Continue with Google
      </Button>
      <Button
        type="button"
        className="w-full h-12 rounded-full border-[0.5px] border-slate-200 bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 text-slate-700 font-medium"
      >
        <GithubIcon />
        Continue with Github
      </Button>
    </div>
  );
}
