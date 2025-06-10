"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BarChart3, Users, UserCheck, GraduationCap, BookOpen, Settings, User } from "lucide-react"

interface MobileNavProps {
  activeView: string
  setActiveView: (view: string) => void
}

const menuItems = [
  {
    title: "Panel Principal",
    items: [
      {
        title: "Dashboard",
        icon: BarChart3,
        key: "dashboard",
      },
    ],
  },
  {
    title: "Gestión de Usuarios",
    items: [
      {
        title: "Solicitudes",
        icon: UserCheck,
        key: "solicitudes",
      },
      {
        title: "Estudiantes",
        icon: Users,
        key: "estudiantes",
      },
    ],
  },
  {
    title: "Gestión Académica",
    items: [
      {
        title: "Cursos",
        icon: BookOpen,
        key: "cursos",
      },
      {
        title: "Configuración",
        icon: Settings,
        key: "configuracion",
      },
    ],
  },
  {
    title: "Mi Cuenta",
    items: [
      {
        title: "Mi Perfil",
        icon: User,
        key: "profile",
      },
    ],
  },
]

export function MobileNav({ activeView, setActiveView }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const handleItemClick = (key: string) => {
    setActiveView(key)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="bg-primary-800 text-white p-6">
          <SheetTitle className="flex items-center gap-3 text-white">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary-500 text-white">
              <GraduationCap className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none text-left">
              <span className="font-semibold text-white">EduPanel</span>
              <span className="text-xs text-primary-200">Sistema Académico</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 p-4">
          {menuItems.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-700 px-2">{section.title}</h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Button
                    key={item.key}
                    variant="ghost"
                    onClick={() => handleItemClick(item.key)}
                    className={`
                      w-full justify-start gap-3 h-10
                      ${
                        activeView === item.key
                          ? "bg-primary-50 text-primary-800 border-r-2 border-primary-500"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-600"
                      }
                    `}
                  >
                    <item.icon
                      className={`size-4 ${activeView === item.key ? "text-primary-500" : "text-neutral-500"}`}
                    />
                    <span className="font-medium">{item.title}</span>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
