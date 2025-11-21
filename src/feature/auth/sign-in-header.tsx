import Logo from '@/assets/icons/Logo.svg'
import Link from 'next/link'

export function SignInHeader() {
  return (
    <div className="mb-8 space-y-4 text-center">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold tracking-tight text-[#1F2937]">
        Sign In to your account
      </h1>

      {/* Subtitle */}
      <p className="text-base leading-relaxed text-[#6B7280]">
        Unlock exclusive access to premium components
        <br />
        and design resources.
      </p>
    </div>
  )
}
