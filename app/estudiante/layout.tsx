"use client"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import SidebarEstudiante from "@/components/estudiante/sidebar-estudiante"
import { Header } from "@/components/layout/header"

export default function EstudianteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarEstudiante />
      <SidebarInset>
        <div className="flex flex-1 flex-col min-h-screen">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-neutral-200 bg-white px-4 shadow-sm sticky top-0 z-40">
            <Header />
          </header>
          <main className="flex-1 overflow-auto bg-[#F3F4F6] p-6">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 