import { Router } from 'express'

const accountsRoutes = Router()

accountsRoutes.post("/create", () => {console.log("criação de usuário")})

export { accountsRoutes }