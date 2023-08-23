import { Router } from 'express'
import { CreateAccountsController } from '../modules/accounts/useCases/createAccounts/createAccountsController'

const accountsRoutes = Router()

const createAccountsController = new CreateAccountsController()

accountsRoutes.post("/create", createAccountsController.handler)

export { accountsRoutes }