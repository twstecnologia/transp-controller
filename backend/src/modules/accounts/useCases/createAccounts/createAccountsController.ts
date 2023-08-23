import { Request, Response } from "express";
import { CreateAccountsUseCase } from "./createAccountsUseCase";

class CreateAccountsController {
    async handler(req: Request, res: Response) {
        const {name, email, phone, cpf, master } = req.body

        const createAccountsUseCase = new CreateAccountsUseCase()

        const account = await createAccountsUseCase.execute({
            name,
            email, 
            phone, 
            cpf, 
            master
        })

        return res.status(201).json(account)
    }
}

export { CreateAccountsController}