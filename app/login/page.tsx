"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const { login } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3B82F6]/10 to-[#10B981]/10 py-8">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4 text-center">Iniciar sesión</h1>
        <LoginForm onLogin={login} />
      </div>
    </div>
  )
} 