'use client'

import { Button } from '@/components/ui/button'
import { FormInput } from '@/feature/auth/form-input'
import { PasswordInput } from '@/feature/auth/password-input'
import { authClient } from '@/lib/auth-client'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})

type SignInFormData = z.infer<typeof signInSchema>

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true)
    try {
      const result = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      })

      if (result.error) {
        toast.error(result.error.message || 'Failed to sign in')
        return
      }

      toast.success('Successfully signed in!')
      router.push('/dashboard')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email Input */}
      <FormInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        registration={register('email')}
        error={errors.email}
      />

      {/* Password Input */}
      <PasswordInput registration={register('password')} error={errors.password} />

      {/* Forgot Password Link */}
      <div className="text-sm text-[#6B7280]">
        Forgot password?{' '}
        <Link href="#" className="font-medium text-[#4F46E5] hover:underline">
          Reset Here
        </Link>
      </div>

      {/* Sign In Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 w-full rounded-xl bg-[#4F46E5] font-semibold text-white transition-colors hover:bg-[#4338CA] disabled:opacity-50"
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Button>

      {/* Sign Up Link */}
      <div className="text-center text-sm text-[#6B7280]">
        {`Don't`} have an account?
        <Link href="/sign-up" className="font-medium text-[#4F46E5] hover:underline">
          Create account
        </Link>
      </div>
    </form>
  )
}
