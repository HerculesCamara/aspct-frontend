import Link from "next/link"
import { Brain, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
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
            <CardTitle className="text-2xl text-center text-purple-700">Acesso ao Sistema</CardTitle>
            <CardDescription className="text-center">
              Faça login para acompanhar o desenvolvimento das crianças
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="responsavel" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="responsavel" className="data-[state=active]:bg-blue-100">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Pais/Responsáveis</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="psicologo" className="data-[state=active]:bg-green-100">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    <span>Psicólogos</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="responsavel">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="responsavel-email" className="text-blue-700">
                      E-mail
                    </Label>
                    <Input
                      id="responsavel-email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      className="border-2 border-blue-200 h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="responsavel-senha" className="text-blue-700">
                      Senha
                    </Label>
                    <Input
                      id="responsavel-senha"
                      type="password"
                      placeholder="Digite sua senha"
                      className="border-2 border-blue-200 h-12 text-lg"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
                    Acessar como Responsável
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="psicologo">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="psicologo-email" className="text-green-700">
                      E-mail Profissional
                    </Label>
                    <Input
                      id="psicologo-email"
                      type="email"
                      placeholder="Digite seu e-mail profissional"
                      className="border-2 border-green-200 h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="psicologo-senha" className="text-green-700">
                      Senha
                    </Label>
                    <Input
                      id="psicologo-senha"
                      type="password"
                      placeholder="Digite sua senha"
                      className="border-2 border-green-200 h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="psicologo-registro" className="text-green-700">
                      Registro Profissional (CRP)
                    </Label>
                    <Input
                      id="psicologo-registro"
                      placeholder="Digite seu número de registro"
                      className="border-2 border-green-200 h-12 text-lg"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
                    Acessar como Psicólogo
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center w-full">
              <Link href="/cadastro" className="text-purple-600 hover:text-purple-800 text-sm">
                Primeiro acesso? Solicite seu cadastro
              </Link>
            </div>
            <div className="text-center w-full">
              <Link href="/recuperar-senha" className="text-muted-foreground text-sm hover:text-purple-600">
                Esqueceu sua senha?
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 ASPCT - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  )
}
