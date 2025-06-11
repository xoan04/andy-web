"use client"
import { useAuth } from "@/components/auth/auth-provider"
import { BookOpen, BarChart2, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const nav = [
  { label: "Mis Cursos", href: "/dashboard/estudiante", icon: BookOpen },
  { label: "Progreso", href: "/dashboard/estudiante/progreso", icon: BarChart2 },
  { label: "Perfil", href: "/dashboard/estudiante/perfil", icon: User },
]

export default function SidebarEstudiante() {
  const { user } = useAuth()
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col min-h-screen shadow-lg">
      <div className="flex flex-col items-center py-8 gap-2 border-b border-neutral-100">
        <Image src={user?.avatar || "/placeholder-user.jpg"} alt="avatar" width={64} height={64} className="rounded-full mb-2" />
        <div className="font-semibold text-[#1E3A8A]">{user?.name || "Estudiante"}</div>
        <div className="text-xs text-[#3B82F6] font-medium uppercase tracking-wider">{user?.role || "estudiante"}</div>
      </div>
      <nav className="flex-1 flex flex-col gap-2 mt-6 px-4">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-[#374151] hover:bg-[#F3F4F6] transition-colors ${pathname === item.href ? "bg-[#3B82F6]/10 text-[#1E3A8A]" : ""}`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
} 