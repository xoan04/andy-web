"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Bell, Shield, Database, Globe } from "lucide-react"

export function ConfiguracionView() {
  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 p-4 sm:p-6 w-full max-w-full overflow-hidden">
        <Tabs defaultValue="general" className="space-y-4 sm:space-y-6 w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-neutral-100 h-auto">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="notificaciones"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2"
            >
              <span className="hidden sm:inline">Notificaciones</span>
              <span className="sm:hidden">Notif.</span>
            </TabsTrigger>
            <TabsTrigger
              value="seguridad"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2"
            >
              Seguridad
            </TabsTrigger>
            <TabsTrigger
              value="integraciones"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2"
            >
              <span className="hidden sm:inline">Integraciones</span>
              <span className="sm:hidden">Integr.</span>
            </TabsTrigger>
            <TabsTrigger
              value="respaldos"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2"
            >
              Respaldos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4 sm:space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Settings className="w-5 h-5" />
                  Configuración General
                </CardTitle>
                <CardDescription className="text-sm">Configuración básica del sistema académico</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="institucion" className="text-sm">
                      Nombre de la Institución
                    </Label>
                    <Input id="institucion" defaultValue="Universidad EduPanel" className="text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="codigo" className="text-sm">
                      Código de Institución
                    </Label>
                    <Input id="codigo" defaultValue="EDUPANEL-001" className="text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion" className="text-sm">
                    Descripción
                  </Label>
                  <Textarea
                    id="descripcion"
                    defaultValue="Sistema de gestión académica para la administración de estudiantes, cursos y solicitudes."
                    rows={3}
                    className="text-sm"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="timezone" className="text-sm">
                      Zona Horaria
                    </Label>
                    <Select defaultValue="america/bogota">
                      <SelectTrigger className="text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america/bogota">América/Bogotá</SelectItem>
                        <SelectItem value="america/mexico">América/México</SelectItem>
                        <SelectItem value="america/lima">América/Lima</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idioma" className="text-sm">
                      Idioma del Sistema
                    </Label>
                    <Select defaultValue="es">
                      <SelectTrigger className="text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="pt">Português</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="bg-primary-800 hover:bg-primary-700 text-white w-full sm:w-auto">
                  Guardar Cambios
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notificaciones" className="space-y-4 sm:space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Bell className="w-5 h-5" />
                  Configuración de Notificaciones
                </CardTitle>
                <CardDescription className="text-sm">Gestiona las notificaciones del sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Notificaciones por Email</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Recibir notificaciones importantes por correo electrónico
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Nuevas Solicitudes</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Notificar cuando lleguen nuevas solicitudes de inscripción
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Recordatorios de Cursos</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Enviar recordatorios sobre fechas importantes de cursos
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Reportes Semanales</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">Recibir resumen semanal de actividades</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-admin" className="text-sm">
                    Email del Administrador
                  </Label>
                  <Input id="email-admin" type="email" defaultValue="admin@edupanel.com" className="text-sm" />
                </div>

                <Button className="bg-primary-800 hover:bg-primary-700 text-white w-full sm:w-auto">
                  Guardar Configuración
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seguridad" className="space-y-4 sm:space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Shield className="w-5 h-5" />
                  Configuración de Seguridad
                </CardTitle>
                <CardDescription className="text-sm">Configuración de seguridad y acceso al sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Autenticación de Dos Factores</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Requerir verificación adicional para el acceso
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Sesiones Múltiples</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Permitir múltiples sesiones activas por usuario
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Registro de Actividades</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Mantener log detallado de todas las actividades
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout" className="text-sm">
                      Tiempo de Sesión (minutos)
                    </Label>
                    <Input id="session-timeout" type="number" defaultValue="60" className="text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-attempts" className="text-sm">
                      Intentos Máximos de Login
                    </Label>
                    <Input id="max-attempts" type="number" defaultValue="5" className="text-sm" />
                  </div>
                </div>

                <Button className="bg-primary-800 hover:bg-primary-700 text-white w-full sm:w-auto">
                  Actualizar Seguridad
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integraciones" className="space-y-4 sm:space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Globe className="w-5 h-5" />
                  Integraciones Externas
                </CardTitle>
                <CardDescription className="text-sm">Configuración de servicios externos y APIs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Integración con Google Classroom</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Sincronizar cursos con Google Classroom
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Zoom Integration</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Crear automáticamente reuniones de Zoom para clases
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Slack Notifications</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Enviar notificaciones importantes a Slack
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="zoom-api" className="text-sm">
                      Zoom API Key
                    </Label>
                    <Input id="zoom-api" type="password" placeholder="••••••••••••••••" className="text-sm" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slack-webhook" className="text-sm">
                      Slack Webhook URL
                    </Label>
                    <Input id="slack-webhook" placeholder="https://hooks.slack.com/..." className="text-sm" />
                  </div>
                </div>

                <Button className="bg-primary-800 hover:bg-primary-700 text-white w-full sm:w-auto">
                  Guardar Integraciones
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="respaldos" className="space-y-4 sm:space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Database className="w-5 h-5" />
                  Respaldos y Recuperación
                </CardTitle>
                <CardDescription className="text-sm">
                  Configuración de respaldos automáticos y recuperación de datos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Respaldos Automáticos</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Crear respaldos automáticos de la base de datos
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5 flex-1 pr-4">
                      <Label className="text-sm">Respaldo en la Nube</Label>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Almacenar respaldos en servicios de nube
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency" className="text-sm">
                      Frecuencia de Respaldo
                    </Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Cada Hora</SelectItem>
                        <SelectItem value="daily">Diario</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                        <SelectItem value="monthly">Mensual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retention" className="text-sm">
                      Retención (días)
                    </Label>
                    <Input id="retention" type="number" defaultValue="30" className="text-sm" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg gap-4">
                    <div>
                      <p className="font-medium text-sm">Último Respaldo</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">15 de Enero, 2024 - 03:00 AM</p>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Descargar
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="bg-primary-800 hover:bg-primary-700 text-white w-full sm:w-auto">
                      Crear Respaldo Manual
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Restaurar desde Respaldo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
