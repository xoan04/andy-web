"use client"

import React from "react"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BarChart3, Users, UserCheck, BookOpen, Settings, User } from "lucide-react"

const pageConfig = {
  "/dashboard": {
    title: "Dashboard",
    description: "Panel principal con estadísticas y resumen general",
    icon: BarChart3,
    breadcrumb: ["Dashboard"],
  },
  "/solicitudes": {
    title: "Solicitudes",
    description: "Gestión de solicitudes de inscripción",
    icon: UserCheck,
    breadcrumb: ["Gestión de Usuarios", "Solicitudes"],
  },
  "/estudiantes": {
    title: "Estudiantes",
    description: "Administración de estudiantes inscritos",
    icon: Users,
    breadcrumb: ["Gestión de Usuarios", "Estudiantes"],
  },
  "/cursos": {
    title: "Cursos",
    description: "Gestión de cursos y programas académicos",
    icon: BookOpen,
    breadcrumb: ["Gestión Académica", "Cursos"],
  },
  "/configuracion": {
    title: "Configuración",
    description: "Configuración del sistema y preferencias",
    icon: Settings,
    breadcrumb: ["Gestión Académica", "Configuración"],
  },
  "/perfil": {
    title: "Mi Perfil",
    description: "Información personal y configuración de cuenta",
    icon: User,
    breadcrumb: ["Mi Cuenta", "Mi Perfil"],
  },
}

export function PageHeader() {
  const pathname = usePathname()
  const config = pageConfig[pathname as keyof typeof pageConfig]

  if (!config) return null

  const Icon = config.icon

  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 border-b border-neutral-200 bg-white">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          {config.breadcrumb.map((item, index) => (
            <React.Fragment key={item}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === config.breadcrumb.length - 1 ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-neutral-800">{config.title}</h1>
          <p className="text-sm text-neutral-600">{config.description}</p>
        </div>
      </div>
    </div>
  )
}
