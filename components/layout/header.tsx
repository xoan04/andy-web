"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useAuth } from "@/components/auth/auth-provider"
import { LogOut, Settings, User, Bell } from "lucide-react"

export function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) return null

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleProfileClick = () => {
    router.push("/perfil")
  }

  const handleSettingsClick = () => {
    router.push("/configuracion")
  }

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Botón hamburger para móviles */}
      <SidebarTrigger className="md:hidden" />

      {/* Título para móviles */}
      <div className="flex items-center gap-2 md:hidden">
        <h1 className="text-lg font-semibold text-neutral-800">EduPanel</h1>
      </div>

      {/* Spacer para empujar el contenido a la derecha */}
      <div className="flex-1"></div>

      {/* Contenido del header alineado a la derecha */}
      <div className="flex items-center gap-4">
        {/* Notificaciones */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-danger-500 rounded-full text-xs"></span>
        </Button>

        {/* Información del usuario - oculta en móviles pequeños */}
        <div className="hidden lg:block text-right">
          <p className="text-sm font-medium text-neutral-800">{user.name}</p>
          <p className="text-xs text-neutral-600 capitalize">{user.role}</p>
        </div>

        {/* Dropdown del perfil */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/andy.jpeg" alt={user.name} />
                <AvatarFallback className="bg-primary-100 text-primary-800">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleProfileClick}>
              <User className="mr-2 h-4 w-4" />
              <span>Mi Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettingsClick}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Configuración</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-danger-600 focus:text-danger-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Botón de logout directo - solo en desktop */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="hidden xl:flex border-danger-200 text-danger-600 hover:bg-danger-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Salir
        </Button>
      </div>
    </div>
  )
}
