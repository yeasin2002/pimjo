'use client'

import { Input } from '@/components/ui/input'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form'

interface FormInputProps {
  label: string
  type?: string
  placeholder?: string
  registration: UseFormRegisterReturn
  error?: FieldError
}

export function FormInput({
  label,
  type = 'text',
  placeholder,
  registration,
  error,
}: FormInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#374151]">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        {...registration}
        className={`h-11 w-full rounded-lg border px-4 placeholder:text-slate-400 ${
          error ? 'border-red-500 focus-visible:ring-red-500' : 'border-[#D1D5DB]'
        }`}
      />
      {error && <span className="mt-1 block text-sm text-red-500">{error.message}</span>}
    </div>
  )
}
