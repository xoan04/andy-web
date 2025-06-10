"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/components/auth/auth-provider"
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Camera,
  Save,
  Eye,
  EyeOff,
  CheckCircle,
  Clock,
  BookOpen,
} from "lucide-react"

export function ProfileView() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+57 300 123 4567",
    address: "Calle 123 #45-67, Bogotá, Colombia",
    bio: "Administrador del sistema académico con más de 5 años de experiencia en gestión educativa.",
    birthDate: "1985-03-15",
    department: "Administración Académica",
    position: "Administrador Principal",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleProfileSave = async () => {
    // Simular guardado
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsEditing(false)
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handlePasswordChange = async () => {
    // Simular cambio de contraseña
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePasswordInputChange = (field: string, value: string) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }))
  }

  // Datos de actividad reciente
  const recentActivity = [
    {
      action: "Aprobó solicitud de inscripción",
      details: "SOL-001 - Ana García",
      date: "Hace 2 horas",
      type: "approval",
    },
    {
      action: "Creó nuevo curso",
      details: "Desarrollo Web Avanzado",
      date: "Hace 1 día",
      type: "create",
    },
    {
      action: "Actualizó información de estudiante",
      details: "EST-045 - Carlos López",
      date: "Hace 2 días",
      type: "update",
    },
    {
      action: "Generó reporte mensual",
      details: "Reporte de inscripciones - Enero 2024",
      date: "Hace 3 días",
      type: "report",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "approval":
        return <CheckCircle className="w-4 h-4 text-success-600" />
      case "create":
        return <BookOpen className="w-4 h-4 text-primary-600" />
      case "update":
        return <User className="w-4 h-4 text-warning-600" />
      case "report":
        return <Clock className="w-4 h-4 text-neutral-600" />
      default:
        return <Clock className="w-4 h-4 text-neutral-600" />
    }
  }

  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 w-full max-w-full overflow-hidden">
        {saveSuccess && (
          <Alert className="border-success-200 bg-success-50">
            <CheckCircle className="h-4 w-4 text-success-600" />
            <AlertDescription className="text-success-800">Los cambios se han guardado correctamente.</AlertDescription>
          </Alert>
        )}

        {/* Header del perfil */}
        <Card className="w-full">
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6">
              <div className="relative mx-auto lg:mx-0">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
                  <AvatarImage src="/andy.jpeg" alt={user?.name} />
                  <AvatarFallback className="bg-primary-100 text-primary-800 text-xl sm:text-2xl">
                    {user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary-800 hover:bg-primary-700"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 space-y-2 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-neutral-800">{user?.name}</h1>
                  <Badge className="bg-primary-100 text-primary-800 border-primary-200 w-fit mx-auto lg:mx-0">
                    {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : ""}
                  </Badge>
                </div>
                <p className="text-neutral-600">{profileData.position}</p>
                <p className="text-sm text-neutral-500">{profileData.department}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="bg-primary-800 hover:bg-primary-700 w-full sm:w-auto"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)} className="w-full sm:w-auto">
                      Cancelar
                    </Button>
                    <Button
                      onClick={handleProfileSave}
                      className="bg-primary-800 hover:bg-primary-700 w-full sm:w-auto"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Guardar
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs del perfil */}
        <Tabs defaultValue="personal" className="space-y-4 sm:space-y-6 w-full">
          <TabsList className="grid w-full grid-cols-3 bg-neutral-100 h-auto">
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2 sm:p-3"
            >
              <span className="hidden sm:inline">Información Personal</span>
              <span className="sm:hidden">Personal</span>
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2 sm:p-3"
            >
              Seguridad
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-primary-800 data-[state=active]:text-white text-xs sm:text-sm p-2 sm:p-3"
            >
              <span className="hidden sm:inline">Actividad Reciente</span>
              <span className="sm:hidden">Actividad</span>
            </TabsTrigger>
          </TabsList>

          {/* Información Personal */}
          <TabsContent value="personal" className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <User className="w-5 h-5" />
                    Datos Personales
                  </CardTitle>
                  <CardDescription className="text-sm">Información básica de tu perfil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        disabled={!isEditing}
                        className="text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        disabled={!isEditing}
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">
                        Teléfono
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          disabled={!isEditing}
                          className="pl-10 text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate" className="text-sm">
                        Fecha de nacimiento
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                        <Input
                          id="birthDate"
                          type="date"
                          value={profileData.birthDate}
                          onChange={(e) => handleInputChange("birthDate", e.target.value)}
                          disabled={!isEditing}
                          className="pl-10 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm">
                      Dirección
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        disabled={!isEditing}
                        className="pl-10 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-sm">
                      Biografía
                    </Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      disabled={!isEditing}
                      rows={4}
                      placeholder="Cuéntanos un poco sobre ti..."
                      className="text-sm"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Shield className="w-5 h-5" />
                    Información Profesional
                  </CardTitle>
                  <CardDescription className="text-sm">Detalles de tu rol en la institución</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-sm">
                      Departamento
                    </Label>
                    <Input
                      id="department"
                      value={profileData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                      disabled={!isEditing}
                      className="text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-sm">
                      Cargo
                    </Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      disabled={!isEditing}
                      className="text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Rol del sistema</Label>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary-100 text-primary-800 border-primary-200 text-xs">
                        {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : ""}
                      </Badge>
                      <span className="text-xs text-neutral-500">Asignado por el administrador</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Permisos</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-neutral-50 rounded text-xs sm:text-sm">
                        <span>Gestión de estudiantes</span>
                        <CheckCircle className="h-4 w-4 text-success-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-neutral-50 rounded text-xs sm:text-sm">
                        <span>Gestión de cursos</span>
                        <CheckCircle className="h-4 w-4 text-success-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-neutral-50 rounded text-xs sm:text-sm">
                        <span>Aprobación de solicitudes</span>
                        <CheckCircle className="h-4 w-4 text-success-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-neutral-50 rounded text-xs sm:text-sm">
                        <span>Configuración del sistema</span>
                        <CheckCircle className="h-4 w-4 text-success-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Seguridad */}
          <TabsContent value="security" className="space-y-4 sm:space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Shield className="w-5 h-5" />
                  Cambiar Contraseña
                </CardTitle>
                <CardDescription className="text-sm">
                  Actualiza tu contraseña para mantener tu cuenta segura
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-sm">
                    Contraseña actual
                  </Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      value={passwordData.currentPassword}
                      onChange={(e) => handlePasswordInputChange("currentPassword", e.target.value)}
                      placeholder="Ingresa tu contraseña actual"
                      className="text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600"
                    >
                      {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-sm">
                    Nueva contraseña
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      value={passwordData.newPassword}
                      onChange={(e) => handlePasswordInputChange("newPassword", e.target.value)}
                      placeholder="Ingresa tu nueva contraseña"
                      className="text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600"
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm">
                    Confirmar nueva contraseña
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={passwordData.confirmPassword}
                      onChange={(e) => handlePasswordInputChange("confirmPassword", e.target.value)}
                      placeholder="Confirma tu nueva contraseña"
                      className="text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handlePasswordChange}
                    className="bg-primary-800 hover:bg-primary-700 w-full sm:w-auto"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Cambiar Contraseña
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Configuración de Seguridad</CardTitle>
                <CardDescription className="text-sm">Opciones adicionales de seguridad para tu cuenta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg gap-4">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Autenticación de dos factores</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      Agrega una capa extra de seguridad a tu cuenta
                    </p>
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Configurar
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg gap-4">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Sesiones activas</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      Gestiona los dispositivos donde has iniciado sesión
                    </p>
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Ver sesiones
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg gap-4">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Historial de acceso</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">Revisa los últimos inicios de sesión</p>
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Ver historial
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Actividad Reciente */}
          <TabsContent value="activity" className="space-y-4 sm:space-y-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Clock className="w-5 h-5" />
                  Actividad Reciente
                </CardTitle>
                <CardDescription className="text-sm">Tus últimas acciones en el sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-neutral-50">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-xs sm:text-sm">{activity.action}</p>
                        <p className="text-xs sm:text-sm text-neutral-600 truncate">{activity.details}</p>
                        <p className="text-xs text-neutral-500 mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Estadísticas de Actividad</CardTitle>
                <CardDescription className="text-sm">Resumen de tu actividad en el sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-primary-800">47</div>
                    <p className="text-xs sm:text-sm text-neutral-600">Solicitudes procesadas</p>
                    <p className="text-xs text-neutral-500">Este mes</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-success-600">12</div>
                    <p className="text-xs sm:text-sm text-neutral-600">Cursos creados</p>
                    <p className="text-xs text-neutral-500">Este mes</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-warning-600">156</div>
                    <p className="text-xs sm:text-sm text-neutral-600">Estudiantes gestionados</p>
                    <p className="text-xs text-neutral-500">Este mes</p>
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
