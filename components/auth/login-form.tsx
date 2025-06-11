"use client"

import React, { useState, useEffect } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<boolean>
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await onLogin(email, password)
      if (!success) {
        setError("Credenciales incorrectas. Por favor, verifica tu email y contraseña.")
      }
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  // Redirección automática después del login
  useEffect(() => {
    if (user) {
      if (user.role === "estudiante") {
        router.push("/estudiante")
      } else {
        router.push("/dashboard")
      }
    }
  }, [user, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-800 rounded-full">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-neutral-800">Bienvenido a EduPanel</CardTitle>
            <CardDescription className="text-neutral-600">
              Ingresa tus credenciales para acceder al sistema académico
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {error && (
            <Alert className="border-danger-200 bg-danger-50">
              <AlertCircle className="h-4 w-4 text-danger-600" />
              <AlertDescription className="text-danger-800">{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-700 font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@edupanel.com"
                  className="pl-10 border-neutral-300 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-neutral-700 font-medium">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 pr-10 border-neutral-300 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-800 hover:bg-primary-700 text-white py-2.5 font-medium"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>

          {/* Credenciales de prueba */}
          <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h4 className="text-sm font-medium text-neutral-700 mb-2">Credenciales de prueba:</h4>
            <div className="space-y-1 text-xs text-neutral-600">
              <p>
                <strong>Administrador:</strong> admin@edupanel.com / admin123
              </p>
              <p>
                <strong>Profesor:</strong> profesor@edupanel.com / profesor123
              </p>
              <p>
                <strong>Coordinador:</strong> coordinador@edupanel.com / coord123
              </p>
              <p>
                <strong>Estudiante:</strong> estudiante@edupanel.com / estudiante123
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
