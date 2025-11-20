"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from 'lucide-react';
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export function PasswordInput({ 
  label = "Password",
  placeholder = "Enter your password", 
  registration,
  error
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-[#374151] text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...registration}
          className={`w-full h-11 rounded-lg border px-4 placeholder:text-slate-400 pr-20 ${
            error ? "border-red-500 focus-visible:ring-red-500" : "border-[#D1D5DB]"
          }`}
        />
        <Button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-xs text-slate-500 font-medium bg-transparent hover:bg-transparent absolute right-3 top-1/2 transform -translate-y-1/2 h-auto p-0 flex items-center gap-1"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{showPassword ? "Hide" : "Show"}</span>
        </Button>
      </div>
      {error && (
        <span className="mt-1 text-sm text-red-500 block">
          {error.message}
        </span>
      )}
    </div>
  );
}
