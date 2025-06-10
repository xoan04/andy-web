"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Clock, User, Mail, BookOpen, Calendar } from "lucide-react"

interface SolicitudDetailModalProps {
  isOpen: boolean
  onClose: () => void
  solicitud: {
    id: string
    nombre: string
    email: string
    curso: string
    fecha: string
    estado: string
    telefono?: string
    mensaje?: string
  } | null
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
}

export function SolicitudDetailModal({ isOpen, onClose, solicitud, onApprove, onReject }: SolicitudDetailModalProps) {
  if (!solicitud) return null

  const getStatusBadge = (estado: string) => {
    switch (estado) {
      case "pendiente":
        return (
          <Badge className="bg-warning-100 text-warning-800 border-warning-200">
            <Clock className="w-3 h-3 mr-1" />
            Pendiente
          </Badge>
        )
      case "aprobada":
        return (
          <Badge className="bg-success-100 text-success-800 border-success-200">
            <CheckCircle className="w-3 h-3 mr-1" />
            Aprobada
          </Badge>
        )
      case "rechazada":
        return (
          <Badge className="bg-danger-100 text-danger-800 border-danger-200">
            <XCircle className="w-3 h-3 mr-1" />
            Rechazada
          </Badge>
        )
      default:
        return <Badge>Desconocido</Badge>
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Detalles de Solicitud - {solicitud.id}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Estado */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-700">Estado:</span>
            {getStatusBadge(solicitud.estado)}
          </div>

          {/* Información del solicitante */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-neutral-500" />
                <span className="font-medium">Nombre completo:</span>
              </div>
              <p className="text-neutral-700 ml-6">{solicitud.nombre}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-neutral-500" />
                <span className="font-medium">Email:</span>
              </div>
              <p className="text-neutral-700 ml-6">{solicitud.email}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-neutral-500" />
                <span className="font-medium">Curso solicitado:</span>
              </div>
              <p className="text-neutral-700 ml-6">{solicitud.curso}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-neutral-500" />
                <span className="font-medium">Fecha de solicitud:</span>
              </div>
              <p className="text-neutral-700 ml-6">{solicitud.fecha}</p>
            </div>
          </div>

          {/* Información adicional */}
          {solicitud.telefono && (
            <div className="space-y-2">
              <span className="text-sm font-medium text-neutral-700">Teléfono:</span>
              <p className="text-neutral-700">{solicitud.telefono}</p>
            </div>
          )}

          {solicitud.mensaje && (
            <div className="space-y-2">
              <span className="text-sm font-medium text-neutral-700">Mensaje:</span>
              <p className="text-neutral-700 bg-neutral-50 p-3 rounded-lg">{solicitud.mensaje}</p>
            </div>
          )}

          {/* Acciones */}
          {solicitud.estado === "pendiente" && (
            <div className="flex gap-3 pt-4 border-t">
              <Button
                onClick={() => onApprove?.(solicitud.id)}
                className="bg-success-600 hover:bg-success-700 text-white flex-1"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Aprobar Solicitud
              </Button>
              <Button
                onClick={() => onReject?.(solicitud.id)}
                variant="outline"
                className="border-danger-200 text-danger-600 hover:bg-danger-50 flex-1"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Rechazar Solicitud
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
