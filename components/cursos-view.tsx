"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, Star, Edit, Trash2, BookOpen, Plus } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts"
import { CursoFormModal } from "@/components/modals/curso-form-modal"
import { DeleteConfirmationModal } from "@/components/modals/delete-confirmation-modal"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const cursos = [
  {
    id: "CUR-001",
    nombre: "Desarrollo Web Full Stack",
    instructor: "Dr. Ana García",
    estudiantes: 45,
    duracion: "12 semanas",
    estado: "activo",
    rating: 4.8,
    fechaInicio: "2024-01-15",
  },
  {
    id: "CUR-002",
    nombre: "Data Science y Machine Learning",
    instructor: "Dr. Carlos López",
    estudiantes: 32,
    duracion: "16 semanas",
    estado: "activo",
    rating: 4.9,
    fechaInicio: "2024-01-10",
  },
  {
    id: "CUR-003",
    nombre: "UX/UI Design",
    instructor: "Dra. María Rodríguez",
    estudiantes: 28,
    duracion: "10 semanas",
    estado: "finalizado",
    rating: 4.7,
    fechaInicio: "2023-12-01",
  },
]

const inscripcionesData = [
  { curso: "Web Dev", estudiantes: 45 },
  { curso: "Data Science", estudiantes: 32 },
  { curso: "UX/UI", estudiantes: 28 },
  { curso: "Marketing", estudiantes: 38 },
  { curso: "Mobile", estudiantes: 25 },
]

const estadoCursosData = [
  { name: "Activos", value: 18, color: "#0088FE" },
  { name: "Finalizados", value: 8, color: "#00C49F" },
  { name: "Programados", value: 4, color: "#FFBB28" },
]

export function CursosView() {
  const [selectedCurso, setSelectedCurso] = useState<any>(null)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [formMode, setFormMode] = useState<"create" | "edit">("create")
  const [cursosData, setCursosData] = useState(cursos)

  const handleCreate = () => {
    setFormMode("create")
    setSelectedCurso(null)
    setIsFormModalOpen(true)
  }

  const handleEdit = (curso: any) => {
    setFormMode("edit")
    setSelectedCurso(curso)
    setIsFormModalOpen(true)
  }

  const handleDelete = (curso: any) => {
    setSelectedCurso(curso)
    setIsDeleteModalOpen(true)
  }

  const handleSave = (data: any) => {
    if (formMode === "create") {
      setCursosData((prev) => [...prev, data])
    } else {
      setCursosData((prev) => prev.map((curso) => (curso.id === data.id ? data : curso)))
    }
  }

  const handleConfirmDelete = () => {
    setCursosData((prev) => prev.filter((curso) => curso.id !== selectedCurso?.id))
  }

  const getStatusBadge = (estado: string) => {
    switch (estado) {
      case "activo":
        return <Badge className="bg-success-100 text-success-800 border-success-200 text-xs">Activo</Badge>
      case "finalizado":
        return <Badge className="bg-primary-100 text-primary-800 border-primary-200 text-xs">Finalizado</Badge>
      case "programado":
        return <Badge className="bg-warning-100 text-warning-800 border-warning-200 text-xs">Programado</Badge>
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
              <CardTitle className="text-xs sm:text-sm font-medium">Total Cursos</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">30</div>
              <p className="text-xs text-muted-foreground">+3 este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Cursos Activos</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">60% del total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Estudiantes</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">168</div>
              <p className="text-xs text-muted-foreground">En cursos activos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Rating Promedio</CardTitle>
              <Star className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">4.7</div>
              <p className="text-xs text-muted-foreground">De 5 estrellas</p>
            </CardContent>
          </Card>
        </div>

        {/* Gráficas */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Inscripciones por Curso</CardTitle>
              <CardDescription className="text-sm">Número de estudiantes por curso activo</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <div className="w-full h-[250px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={inscripcionesData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="curso" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="estudiantes" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Estado de Cursos</CardTitle>
              <CardDescription className="text-sm">Distribución por estado actual</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <div className="w-full h-[250px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={estadoCursosData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      fontSize={12}
                    >
                      {estadoCursosData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabla de cursos */}
        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-base sm:text-lg">Lista de Cursos</CardTitle>
                <CardDescription className="text-sm">Gestión completa de cursos disponibles</CardDescription>
              </div>
              <Button onClick={handleCreate} className="bg-primary-800 hover:bg-primary-700 w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Crear Curso
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[150px]">Curso</TableHead>
                    <TableHead className="hidden md:table-cell min-w-[120px]">Instructor</TableHead>
                    <TableHead className="min-w-[80px]">Estudiantes</TableHead>
                    <TableHead className="hidden sm:table-cell min-w-[90px]">Duración</TableHead>
                    <TableHead className="min-w-[80px]">Estado</TableHead>
                    <TableHead className="hidden lg:table-cell min-w-[70px]">Rating</TableHead>
                    <TableHead className="hidden xl:table-cell min-w-[90px]">Fecha Inicio</TableHead>
                    <TableHead className="min-w-[100px]">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cursosData.map((curso) => (
                    <TableRow key={curso.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-xs sm:text-sm">{curso.nombre}</div>
                          <div className="text-xs text-muted-foreground">{curso.id}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-xs sm:text-sm">{curso.instructor}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span className="text-xs sm:text-sm">{curso.estudiantes}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-xs sm:text-sm">{curso.duracion}</TableCell>
                      <TableCell>{getStatusBadge(curso.estado)}</TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {curso.rating > 0 ? (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-warning-400 fill-current" />
                            <span className="text-xs sm:text-sm text-neutral-700 font-medium">{curso.rating}</span>
                          </div>
                        ) : (
                          <span className="text-xs text-neutral-500">N/A</span>
                        )}
                      </TableCell>
                      <TableCell className="hidden xl:table-cell text-xs sm:text-sm">{curso.fechaInicio}</TableCell>
                      <TableCell>
                        <div className="flex gap-1 sm:gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(curso)}
                            className="border-primary-200 text-primary-600 hover:bg-primary-50 h-8 w-8 p-0"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(curso)}
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
      <CursoFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        curso={selectedCurso}
        onSave={handleSave}
        mode={formMode}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Eliminar Curso"
        description="¿Estás seguro de que deseas eliminar este curso?"
        itemName={selectedCurso?.nombre || ""}
      />
    </div>
  )
}
