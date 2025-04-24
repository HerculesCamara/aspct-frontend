import Link from "next/link"
import { Brain, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SenhaResetadaPage() {
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
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-center text-purple-700">Senha Alterada!</CardTitle>
            <CardDescription className="text-center">Sua senha foi redefinida com sucesso</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">Agora você pode fazer login com sua nova senha.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700">Voltar para o Login</Button>
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
