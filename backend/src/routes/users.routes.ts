import { Router } from 'express'

const usersRoutes = Router()

usersRoutes.post("/create", () => {console.log("criação de usuário")})

export { usersRoutes }