"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, User, Edit, Trash2, Plus } from "lucide-react"
import { EstudianteFormModal } from "@/components/modals/estudiante-form-modal"
import { DeleteConfirmationModal } from "@/components/modals/delete-confirmation-modal"

const estudiantes = [
  {
    id: "EST-001",
    nombre: "Ana García",
    email: "ana.garcia@example.com",
    curso: "Desarrollo Web",
    fechaInscripcion: "2024-01-15",
    estado: "activo",
    progreso: 75,
  },
  {
    id: "EST-002",
    nombre: "Carlos López",
    email: "carlos.lopez@example.com",
    curso: "Data Science",
    fechaInscripcion: "2024-01-10",
    estado: "inactivo",
    progreso: 25,
  },
  {
    id: "EST-003",
    nombre: "María Rodríguez",
    email: "maria.rodriguez@example.com",
    curso: "UX/UI Design",
    fechaInscripcion: "2024-01-05",
    estado: "graduado",
    progreso: 100,
  },
]

export function EstudiantesView() {
  const [selectedEstudiante, setSelectedEstudiante] = useState<any>(null)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [formMode, setFormMode] = useState<"create" | "edit">("create")
  const [estudiantesData, setEstudiantesData] = useState(estudiantes)

  const handleCreate = () => {
    setFormMode("create")
    setSelectedEstudiante(null)
    setIsFormModalOpen(true)
  }

  const handleEdit = (estudiante: any) => {
    setFormMode("edit")
    setSelectedEstudiante(estudiante)
    setIsFormModalOpen(true)
  }

  const handleDelete = (estudiante: any) => {
    setSelectedEstudiante(estudiante)
    setIsDeleteModalOpen(true)
  }

  const handleSave = (data: any) => {
    if (formMode === "create") {
      setEstudiantesData((prev) => [...prev, data])
    } else {
      setEstudiantesData((prev) => prev.map((estudiante) => (estudiante.id === data.id ? data : estudiante)))
    }
  }

  const handleConfirmDelete = () => {
    setEstudiantesData((prev) => prev.filter((estudiante) => estudiante.id !== selectedEstudiante?.id))
  }

  const getStatusBadge = (estado: string) => {
    switch (estado) {
      case "activo":
        return <Badge className="bg-success-100 text-success-800 border-success-200 text-xs">Activo</Badge>
      case "inactivo":
        return <Badge className="bg-warning-100 text-warning-800 border-warning-200 text-xs">Inactivo</Badge>
      case "graduado":
        return <Badge className="bg-primary-100 text-primary-800 border-primary-200 text-xs">Graduado</Badge>
      default:
        return <Badge className="bg-neutral-100 text-neutral-800 border-neutral-200 text-xs">Desconocido</Badge>
    }
  }

  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 space-y-4 sm:space-y-6 p-4 sm:p-6 w-full max-w-full overflow-hidden">
        {/* Cards de resumen */}
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4 w-full">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Estudiantes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">195</div>
              <p className="text-xs text-muted-foreground">+15 este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Estudiantes Activos</CardTitle>
              <User className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">150</div>
              <p className="text-xs text-muted-foreground">77% del total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Cursos Inscritos</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Diferentes cursos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Progreso Promedio</CardTitle>
              <User className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">En cursos activos</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabla de estudiantes */}
        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-base sm:text-lg">Lista de Estudiantes</CardTitle>
                <CardDescription className="text-sm">Gestión completa de estudiantes inscritos</CardDescription>
              </div>
              <Button onClick={handleCreate} className="bg-primary-800 hover:bg-primary-700 w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Agregar Estudiante
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[120px]">Estudiante</TableHead>
                    <TableHead className="hidden md:table-cell min-w-[180px]">Email</TableHead>
                    <TableHead className="min-w-[100px]">Curso</TableHead>
                    <TableHead className="hidden sm:table-cell min-w-[90px]">Inscripción</TableHead>
                    <TableHead className="min-w-[80px]">Estado</TableHead>
                    <TableHead className="hidden lg:table-cell min-w-[80px]">Progreso</TableHead>
                    <TableHead className="min-w-[100px]">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {estudiantesData.map((estudiante) => (
                    <TableRow key={estudiante.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-xs sm:text-sm">{estudiante.nombre}</div>
                          <div className="text-xs text-muted-foreground">{estudiante.id}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-xs sm:text-sm">{estudiante.email}</TableCell>
                      <TableCell className="text-xs sm:text-sm">{estudiante.curso}</TableCell>
                      <TableCell className="hidden sm:table-cell text-xs sm:text-sm">
                        {estudiante.fechaInscripcion}
                      </TableCell>
                      <TableCell>{getStatusBadge(estudiante.estado)}</TableCell>
                      <TableCell className="hidden lg:table-cell text-xs sm:text-sm">{estudiante.progreso}%</TableCell>
                      <TableCell>
                        <div className="flex gap-1 sm:gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(estudiante)}
                            className="border-primary-200 text-primary-600 hover:bg-primary-50 h-8 w-8 p-0"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(estudiante)}
                            className="border-danger-200 text-danger-600 hover:bg-danger-50 h-8 w-8 p-0"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
      <EstudianteFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        estudiante={selectedEstudiante}
        onSave={handleSave}
        mode={formMode}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Eliminar Estudiante"
        description="¿Estás seguro de que deseas eliminar este estudiante?"
        itemName={selectedEstudiante?.nombre || ""}
      />
    </div>
  )
}
