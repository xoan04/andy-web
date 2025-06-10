"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, UserCheck, TrendingUp } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts"

const statsData = [
  { name: "Ene", estudiantes: 120, cursos: 15 },
  { name: "Feb", estudiantes: 135, cursos: 18 },
  { name: "Mar", estudiantes: 148, cursos: 22 },
  { name: "Abr", estudiantes: 162, cursos: 25 },
  { name: "May", estudiantes: 178, cursos: 28 },
  { name: "Jun", estudiantes: 195, cursos: 30 },
]

const pieData = [
  { name: "Activos", value: 145, color: "#0088FE" },
  { name: "Inactivos", value: 30, color: "#00C49F" },
  { name: "Pendientes", value: 20, color: "#FFBB28" },
]

export function DashboardView() {
  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 space-y-4 sm:space-y-6 p-4 sm:p-6 w-full max-w-full overflow-hidden">
        {/* Cards de estadísticas */}
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <Card className="border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Total Estudiantes</CardTitle>
              <Users className="h-4 w-4 text-primary-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-neutral-800">195</div>
              <p className="text-xs text-success-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12% desde el mes pasado
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Cursos Activos</CardTitle>
              <BookOpen className="h-4 w-4 text-primary-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-neutral-800">30</div>
              <p className="text-xs text-success-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +7% desde el mes pasado
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Solicitudes Pendientes</CardTitle>
              <UserCheck className="h-4 w-4 text-warning-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-neutral-800">23</div>
              <p className="text-xs text-danger-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                -5% desde el mes pasado
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Tasa de Aprobación</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-neutral-800">87%</div>
              <p className="text-xs text-success-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +3% desde el mes pasado
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gráficas */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Crecimiento de Estudiantes y Cursos</CardTitle>
              <CardDescription className="text-sm">Evolución mensual del último semestre</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <div className="w-full h-[250px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={statsData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="estudiantes" fill="#8884d8" name="Estudiantes" />
                    <Bar dataKey="cursos" fill="#82ca9d" name="Cursos" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Estado de Estudiantes</CardTitle>
              <CardDescription className="text-sm">Distribución actual por estado</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <div className="w-full h-[250px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      fontSize={12}
                    >
                      {pieData.map((entry, index) => (
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
      </main>
    </div>
  )
}
