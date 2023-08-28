import { Router } from 'express'
import { CreateAccountsController } from '../modules/accounts/useCases/createAccounts/createAccountsController'
import { AuthenticateController } from '../modules/accounts/useCases/authenticateAccount/AuthenticateAccountController'

const accountsRoutes = Router()

const createAccountsController = new CreateAccountsController()
const authenticateAccountController = new AuthenticateController()

accountsRoutes.post("/create", createAccountsController.handler)

accountsRoutes.post("/authenticate", authenticateAccountController.handle)

export { accountsRoutes }