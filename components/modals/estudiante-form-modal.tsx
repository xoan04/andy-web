"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Save, X } from "lucide-react"

interface EstudianteFormModalProps {
  isOpen: boolean
  onClose: () => void
  estudiante?: {
    id: string
    nombre: string
    email: string
    curso: string
    fechaInscripcion: string
    estado: string
    progreso: number
  } | null
  onSave: (data: any) => void
  mode: "create" | "edit"
}

export function EstudianteFormModal({ isOpen, onClose, estudiante, onSave, mode }: EstudianteFormModalProps) {
  const [formData, setFormData] = useState({
    nombre: estudiante?.nombre || "",
    email: estudiante?.email || "",
    curso: estudiante?.curso || "",
    estado: estudiante?.estado || "activo",
    progreso: estudiante?.progreso || 0,
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simular API call
      onSave({
        ...formData,
        id: estudiante?.id || `EST-${Date.now()}`,
        fechaInscripcion: estudiante?.fechaInscripcion || new Date().toISOString().split("T")[0],
      })
      onClose()
    } catch (error) {
      console.error("Error saving student:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            {mode === "create" ? "Agregar Nuevo Estudiante" : "Editar Estudiante"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo *</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
                placeholder="Ingrese el nombre completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="estudiante@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="curso">Curso *</Label>
              <Select value={formData.curso} onValueChange={(value) => handleChange("curso", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Desarrollo Web">Desarrollo Web</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
                  <SelectItem value="Marketing Digital">Marketing Digital</SelectItem>
                  <SelectItem value="Desarrollo Mobile">Desarrollo Mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="estado">Estado</Label>
              <Select value={formData.estado} onValueChange={(value) => handleChange("estado", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="activo">Activo</SelectItem>
                  <SelectItem value="inactivo">Inactivo</SelectItem>
                  <SelectItem value="graduado">Graduado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="progreso">Progreso del curso (%)</Label>
              <Input
                id="progreso"
                type="number"
                min="0"
                max="100"
                value={formData.progreso}
                onChange={(e) => handleChange("progreso", Number.parseInt(e.target.value) || 0)}
                placeholder="0"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-primary-800 hover:bg-primary-700">
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Guardando..." : mode === "create" ? "Crear Estudiante" : "Guardar Cambios"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
