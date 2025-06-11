"use client"

import type React from "react"

import { useAuth } from "@/components/auth/auth-provider"
import { LoginForm } from "@/components/auth/login-form"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/layout/header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, login, isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user?.role === "estudiante") {
      router.replace("/estudiante")
    }
  }, [user, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-800 mx-auto"></div>
          <p className="mt-4 text-neutral-600">Cargando...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col min-h-screen">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-neutral-200 bg-white px-4 shadow-sm sticky top-0 z-40">
            <Header />
          </header>
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
