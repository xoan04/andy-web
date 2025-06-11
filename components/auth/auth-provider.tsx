"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { authService, type User } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const USERS: User[] = [
  { id: "1", email: "admin@edupanel.com", name: "Administrador Principal", role: "admin", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "2", email: "profesor@edupanel.com", name: "Dr. Carlos Profesor", role: "profesor", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "3", email: "coordinador@edupanel.com", name: "María Coordinadora", role: "coordinador", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "4", email: "estudiante@edupanel.com", name: "Juan Pérez", role: "estudiante", avatar: "/placeholder-user.jpg" },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("user")
    if (stored) setUser(JSON.parse(stored))
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Passwords hardcodeadas
    const passwords: Record<string, string> = {
      "admin@edupanel.com": "admin123",
      "profesor@edupanel.com": "profesor123",
      "coordinador@edupanel.com": "coord123",
      "estudiante@edupanel.com": "estudiante123",
    }
    const found = USERS.find(u => u.email === email && passwords[u.email] === password)
    if (found) {
      setUser(found)
      localStorage.setItem("user", JSON.stringify(found))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
