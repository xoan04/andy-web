"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Save, X } from "lucide-react"

interface CursoFormModalProps {
  isOpen: boolean
  onClose: () => void
  curso?: {
    id: string
    nombre: string
    instructor: string
    estudiantes: number
    duracion: string
    estado: string
    rating: number
    fechaInicio: string
    descripcion?: string
  } | null
  onSave: (data: any) => void
  mode: "create" | "edit"
}

export function CursoFormModal({ isOpen, onClose, curso, onSave, mode }: CursoFormModalProps) {
  const [formData, setFormData] = useState({
    nombre: curso?.nombre || "",
    instructor: curso?.instructor || "",
    duracion: curso?.duracion || "",
    estado: curso?.estado || "programado",
    fechaInicio: curso?.fechaInicio || "",
    descripcion: curso?.descripcion || "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simular API call
      onSave({
        ...formData,
        id: curso?.id || `CUR-${Date.now()}`,
        estudiantes: curso?.estudiantes || 0,
        rating: curso?.rating || 0,
      })
      onClose()
    } catch (error) {
      console.error("Error saving course:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            {mode === "create" ? "Crear Nuevo Curso" : "Editar Curso"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="nombre">Nombre del curso *</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
                placeholder="Ej: Desarrollo Web Full Stack"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructor">Instructor *</Label>
              <Input
                id="instructor"
                value={formData.instructor}
                onChange={(e) => handleChange("instructor", e.target.value)}
                placeholder="Nombre del instructor"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duracion">Duración *</Label>
              <Input
                id="duracion"
                value={formData.duracion}
                onChange={(e) => handleChange("duracion", e.target.value)}
                placeholder="Ej: 12 semanas"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estado">Estado</Label>
              <Select value={formData.estado} onValueChange={(value) => handleChange("estado", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="programado">Programado</SelectItem>
                  <SelectItem value="activo">Activo</SelectItem>
                  <SelectItem value="finalizado">Finalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fechaInicio">Fecha de inicio</Label>
              <Input
                id="fechaInicio"
                type="date"
                value={formData.fechaInicio}
                onChange={(e) => handleChange("fechaInicio", e.target.value)}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                value={formData.descripcion}
                onChange={(e) => handleChange("descripcion", e.target.value)}
                placeholder="Descripción del curso, objetivos, metodología..."
                rows={4}
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
              {isLoading ? "Guardando..." : mode === "create" ? "Crear Curso" : "Guardar Cambios"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
