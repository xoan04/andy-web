"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { BarChart3, Users, UserCheck, GraduationCap, BookOpen, Settings, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Panel Principal",
    items: [
      {
        title: "Dashboard",
        icon: BarChart3,
        href: "/dashboard",
      },
    ],
  },
  {
    title: "Gestión de Usuarios",
    items: [
      {
        title: "Solicitudes",
        icon: UserCheck,
        href: "/solicitudes",
      },
      {
        title: "Estudiantes",
        icon: Users,
        href: "/estudiantes",
      },
    ],
  },
  {
    title: "Gestión Académica",
    items: [
      {
        title: "Cursos",
        icon: BookOpen,
        href: "/cursos",
      },
      {
        title: "Configuración",
        icon: Settings,
        href: "/configuracion",
      },
    ],
  },
  {
    title: "Mi Cuenta",
    items: [
      {
        title: "Mi Perfil",
        icon: User,
        href: "/perfil",
      },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-primary-800 text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="bg-primary-800 hover:bg-primary-700 text-white" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary-500 text-white">
                  <GraduationCap className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-white">EduPanel</span>
                  <span className="text-xs text-primary-200">Sistema Académico</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-white border-r border-neutral-200">
        {menuItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-neutral-700 font-medium">{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={`
                          ${
                            isActive
                              ? "bg-primary-50 text-primary-800 border-r-2 border-primary-500"
                              : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-600"
                          }
                        `}
                      >
                        <Link href={item.href}>
                          <item.icon className={`size-4 ${isActive ? "text-primary-500" : "text-neutral-500"}`} />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
