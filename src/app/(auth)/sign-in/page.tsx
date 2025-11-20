"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/feature/auth/form-input";
import { PasswordInput } from "@/feature/auth/password-input";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    // signIn("credentials", {
    //   email: data.email,
    //   password: data.password,
    // });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email Input */}
      <FormInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        registration={register("email")}
        error={errors.email}
      />

      {/* Password Input */}
      <PasswordInput
        registration={register("password")}
        error={errors.password}
      />

      {/* Forgot Password Link */}
      <div className="text-sm text-[#6B7280]">
        Forgot password?{" "}
        <Link href="#" className="text-[#4F46E5] font-medium hover:underline">
          Reset Here
        </Link>
      </div>

      {/* Sign In Button */}
      <Button
        type="submit"
        className="w-full h-12 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold rounded-xl transition-colors"
      >
        Sign In
      </Button>

      {/* Sign Up Link */}
      <div className="text-center text-sm text-[#6B7280]">
        {`Don't`} have an account?
        <Link
          href="/sign-up"
          className="text-[#4F46E5] font-medium hover:underline"
        >
          Create account
        </Link>
      </div>
    </form>
  );
}
