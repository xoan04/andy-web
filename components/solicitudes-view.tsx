"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle, XCircle, Eye } from "lucide-react"
import { SolicitudDetailModal } from "@/components/modals/solicitud-detail-modal"

const solicitudes = [
  {
    id: "SOL-001",
    nombre: "Ana García",
    email: "ana.garcia@email.com",
    curso: "Desarrollo Web",
    fecha: "2024-01-15",
    estado: "pendiente",
  },
  {
    id: "SOL-002",
    nombre: "Carlos López",
    email: "carlos.lopez@email.com",
    curso: "Data Science",
    fecha: "2024-01-14",
    estado: "aprobada",
  },
  {
    id: "SOL-003",
    nombre: "María Rodríguez",
    email: "maria.rodriguez@email.com",
    curso: "UX/UI Design",
    fecha: "2024-01-13",
    estado: "rechazada",
  },
  {
    id: "SOL-004",
    nombre: "Juan Martínez",
    email: "juan.martinez@email.com",
    curso: "Marketing Digital",
    fecha: "2024-01-12",
    estado: "pendiente",
  },
  {
    id: "SOL-005",
    nombre: "Laura Sánchez",
    email: "laura.sanchez@email.com",
    curso: "Desarrollo Mobile",
    fecha: "2024-01-11",
    estado: "aprobada",
  },
]

const getStatusBadge = (estado: string) => {
  switch (estado) {
    case "pendiente":
      return (
        <Badge className="bg-warning-100 text-warning-800 border-warning-200 hover:bg-warning-200 text-xs">
          <Clock className="w-3 h-3 mr-1" />
          Pendiente
        </Badge>
      )
    case "aprobada":
      return (
        <Badge className="bg-success-100 text-success-800 border-success-200 hover:bg-success-200 text-xs">
          <CheckCircle className="w-3 h-3 mr-1" />
          Aprobada
        </Badge>
      )
    case "rechazada":
      return (
        <Badge className="bg-danger-100 text-danger-800 border-danger-200 hover:bg-danger-200 text-xs">
          <XCircle className="w-3 h-3 mr-1" />
          Rechazada
        </Badge>
      )
    default:
      return <Badge className="bg-neutral-100 text-neutral-800 border-neutral-200 text-xs">Desconocido</Badge>
  }
}

export function SolicitudesView() {
  const [selectedSolicitud, setSelectedSolicitud] = useState<any>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [solicitudesData, setSolicitudesData] = useState(solicitudes)

  const handleViewDetails = (solicitud: any) => {
    setSelectedSolicitud(solicitud)
    setIsDetailModalOpen(true)
  }

  const handleApprove = (id: string) => {
    setSolicitudesData((prev) => prev.map((sol) => (sol.id === id ? { ...sol, estado: "aprobada" } : sol)))
    setIsDetailModalOpen(false)
  }

  const handleReject = (id: string) => {
    setSolicitudesData((prev) => prev.map((sol) => (sol.id === id ? { ...sol, estado: "rechazada" } : sol)))
    setIsDetailModalOpen(false)
  }

  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 space-y-4 sm:space-y-6 p-4 sm:p-6 w-full max-w-full overflow-hidden">
        {/* Cards de resumen */}
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 w-full">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Solicitudes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aprobadas</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">65% del total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
              <XCircle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Requieren revisión</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabla de solicitudes */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Solicitudes Recientes</CardTitle>
            <CardDescription className="text-sm">Lista de todas las solicitudes de inscripción</CardDescription>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[80px]">ID</TableHead>
                    <TableHead className="min-w-[120px]">Nombre</TableHead>
                    <TableHead className="hidden md:table-cell min-w-[180px]">Email</TableHead>
                    <TableHead className="min-w-[100px]">Curso</TableHead>
                    <TableHead className="hidden sm:table-cell min-w-[90px]">Fecha</TableHead>
                    <TableHead className="min-w-[90px]">Estado</TableHead>
                    <TableHead className="min-w-[120px]">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {solicitudesData.map((solicitud) => (
                    <TableRow key={solicitud.id}>
                      <TableCell className="font-medium text-xs sm:text-sm">{solicitud.id}</TableCell>
                      <TableCell className="text-xs sm:text-sm">{solicitud.nombre}</TableCell>
                      <TableCell className="hidden md:table-cell text-xs sm:text-sm">{solicitud.email}</TableCell>
                      <TableCell className="text-xs sm:text-sm">{solicitud.curso}</TableCell>
                      <TableCell className="hidden sm:table-cell text-xs sm:text-sm">{solicitud.fecha}</TableCell>
                      <TableCell>{getStatusBadge(solicitud.estado)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1 sm:gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(solicitud)}
                            className="border-primary-200 text-primary-600 hover:bg-primary-50 h-8 w-8 p-0"
                          >
                            <Eye className="w-3 h-3" />
                          </Button>
                          {solicitud.estado === "pendiente" && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleApprove(solicitud.id)}
                                className="border-success-200 text-success-600 hover:bg-success-50 h-8 w-8 p-0"
                              >
                                <CheckCircle className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleReject(solicitud.id)}
                                className="border-danger-200 text-danger-600 hover:bg-danger-50 h-8 w-8 p-0"
                              >
                                <XCircle className="w-3 h-3" />
                              </Button>
                            </>
                          )}
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
      <SolicitudDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        solicitud={selectedSolicitud}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  )
}
