import { FormDivider } from "@/feature/auth/form-divider";
import { OAuthentication } from "@/feature/auth/o-authentication";
import { SignInHeader } from "@/feature/auth/sign-in-header";

export default function SignInPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignInHeader />
        <div className="bg-[#F3F4F6] rounded-[32px] p-4">
          <OAuthentication />
          <FormDivider />
          <div className="bg-white rounded-3xl p-8 mt-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
