import Link from "next/link"
import { ArrowLeft, Brain, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmacaoRecuperacaoPage() {
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
            <CardTitle className="text-2xl text-center text-purple-700">E-mail Enviado</CardTitle>
            <CardDescription className="text-center">Enviamos um link de recuperação para o seu e-mail</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Por favor, verifique sua caixa de entrada e clique no link enviado para redefinir sua senha.
            </p>
            <p className="text-muted-foreground">Se não encontrar o e-mail, verifique também sua pasta de spam.</p>
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
