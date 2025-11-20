"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/feature/auth/form-input";
import { PasswordInput } from "@/feature/auth/password-input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const signUpSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      const result = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.full_name,
      });

      if (result.error) {
        toast.error(result.error.message || "Failed to create account");
        return;
      }

      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name Input */}
      <FormInput
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        registration={register("full_name")}
        error={errors.full_name}
      />

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

      {/* Sign Up Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
      >
        {isLoading ? "Creating account..." : "Sign Up"}
      </Button>

      {/* Sign In Link */}
      <div className="text-center text-sm text-[#6B7280]">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-[#4F46E5] font-medium hover:underline"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
}
