import { Router } from "express"
import { usersRoutes } from "./users.routes"
import { accountsRoutes } from "./accounts.routes"

const routes = Router()

//rota para criação de usuários comuns (motoristas)
routes.use("/users", usersRoutes)

//rota para criação de contas de usuários para adiministração do sistema
routes.use("/accounts", accountsRoutes)

export { routes }