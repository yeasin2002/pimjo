import Logo from "@/assets/icons/Logo.svg";
import Link from "next/link";

export function SignInHeader() {
  return (
    <div className="text-center space-y-4 mb-8">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-[#1F2937] tracking-tight">
        Sign In to your account
      </h1>

      {/* Subtitle */}
      <p className="text-[#6B7280] text-base leading-relaxed">
        Unlock exclusive access to premium components
        <br />
        and design resources.
      </p>
    </div>
  );
}
