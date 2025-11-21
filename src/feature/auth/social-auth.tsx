'use client'

import { GithubIcon } from '@/components/icons/github-icon'
import { GoogleIcon } from '@/components/icons/google-icon'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function SocialAuth() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)

  const handleSocialSignIn = async (provider: 'google' | 'github') => {
    setLoadingProvider(provider)
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: '/dashboard',
      })
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : `Failed to sign in with ${provider === 'google' ? 'Google' : 'GitHub'}`
      )
      setLoadingProvider(null)
    }
  }

  return (
    <div className="mb-6 space-y-3">
      <Button
        type="button"
        onClick={() => handleSocialSignIn('google')}
        disabled={loadingProvider !== null}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border-[0.5px] border-slate-200 bg-white font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50"
      >
        <GoogleIcon />
        {loadingProvider === 'google' ? 'Signing in...' : 'Continue with Google'}
      </Button>
      <Button
        type="button"
        onClick={() => handleSocialSignIn('github')}
        disabled={loadingProvider !== null}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border-[0.5px] border-slate-200 bg-white font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50"
      >
        <GithubIcon />
        {loadingProvider === 'github' ? 'Signing in...' : 'Continue with Github'}
      </Button>
    </div>
  )
}
