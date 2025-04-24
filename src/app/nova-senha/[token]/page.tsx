"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Brain, Eye, EyeOff, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RedefinirSenhaPage({ params }: { params: { token: string } }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="rounded-full bg-purple-100 p-3">
              <Brain className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-purple-700">ASPCT</h1>
          <p className="text-muted-foreground">Ambiente Virtual Gamificado para desenvolvimento cognitivo</p>
        </div>

        <Card className="border-2 border-purple-200 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-purple-700">Redefinir Senha</CardTitle>
            <CardDescription className="text-center">Crie uma nova senha para sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <input type="hidden" name="token" value={params.token} />

              <div className="space-y-2">
                <Label htmlFor="password" className="text-purple-700">
                  Nova Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua nova senha"
                    className="border-2 border-purple-200 h-12 text-lg pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Ocultar senha" : "Mostrar senha"}</span>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  A senha deve ter pelo menos 8 caracteres, incluindo letras e números
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-purple-700">
                  Confirmar Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirme sua nova senha"
                    className="border-2 border-purple-200 h-12 text-lg pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-10 w-10"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}</span>
                  </Button>
                </div>
              </div>

              <Button
                className="w-full h-12 text-lg bg-purple-600 hover:bg-purple-700"
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = "/redefinir-senha/sucesso"
                }}
              >
                Redefinir Senha
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/" className="flex items-center text-sm text-purple-600 hover:text-purple-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o login
            </Link>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 ASPCT - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  )
}
