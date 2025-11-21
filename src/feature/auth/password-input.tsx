'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form'

interface PasswordInputProps {
  label?: string
  placeholder?: string
  registration: UseFormRegisterReturn
  error?: FieldError
}

export function PasswordInput({
  label = 'Password',
  placeholder = 'Enter your password',
  registration,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#374151]">{label}</label>
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          {...registration}
          className={`h-11 w-full rounded-lg border px-4 pr-20 placeholder:text-slate-400 ${
            error ? 'border-red-500 focus-visible:ring-red-500' : 'border-[#D1D5DB]'
          }`}
        />
        <Button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-3 flex h-auto -translate-y-1/2 transform items-center gap-1 bg-transparent p-0 text-xs font-medium text-slate-500 hover:bg-transparent"
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          <span>{showPassword ? 'Hide' : 'Show'}</span>
        </Button>
      </div>
      {error && <span className="mt-1 block text-sm text-red-500">{error.message}</span>}
    </div>
  )
}
