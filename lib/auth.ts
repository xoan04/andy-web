"use client"

// Credenciales hardcodeadas
const USERS = [
  {
    id: "1",
    email: "admin@edupanel.com",
    password: "admin123",
    name: "Administrador Principal",
    role: "admin",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    email: "profesor@edupanel.com",
    password: "profesor123",
    name: "Dr. Carlos Profesor",
    role: "profesor",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    email: "coordinador@edupanel.com",
    password: "coord123",
    name: "María Coordinadora",
    role: "coordinador",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export interface User {
  id: string
  email: string
  name: string
  role: string
  avatar: string
}

export class AuthService {
  private static instance: AuthService
  private currentUser: User | null = null

  private constructor() {
    // Verificar si hay un usuario guardado en localStorage
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("currentUser")
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser)
      }
    }
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async login(email: string, password: string): Promise<boolean> {
    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = USERS.find((u) => u.email === email && u.password === password)

    if (user) {
      const { password: _, ...userWithoutPassword } = user
      this.currentUser = userWithoutPassword

      // Guardar en localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))
      }

      return true
    }

    return false
  }

  logout(): void {
    this.currentUser = null
    if (typeof window !== "undefined") {
      localStorage.removeItem("currentUser")
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null
  }

  hasRole(role: string): boolean {
    return this.currentUser?.role === role
  }
}

export const authService = AuthService.getInstance()
