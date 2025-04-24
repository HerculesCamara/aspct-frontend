"use client"

import Link from "next/link"
import { ArrowLeft, Brain, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RecuperarSenhaPage() {
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
            <CardTitle className="text-2xl text-center text-purple-700">Recuperar Senha</CardTitle>
            <CardDescription className="text-center">
              Digite seu e-mail para receber um link de recuperação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-700">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail cadastrado"
                    className="border-2 border-purple-200 h-12 text-lg pl-10"
                    required
                  />
                </div>
              </div>
              <Button
                className="w-full h-12 text-lg bg-purple-600 hover:bg-purple-700"
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = "/recuperar-senha/confirmacao"
                }}
              >
                Enviar Link de Recuperação
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
