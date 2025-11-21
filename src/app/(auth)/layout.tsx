import { FormDivider } from '@/feature/auth/form-divider'
import { SignInHeader } from '@/feature/auth/sign-in-header'
import { SocialAuth } from '@/feature/auth/social-auth'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] p-4">
      <div className="w-full max-w-md">
        <SignInHeader />
        <div className="rounded-[32px] bg-[#F3F4F6] p-4">
          <SocialAuth />
          <FormDivider />
          <div className="mt-6 rounded-3xl bg-white p-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
