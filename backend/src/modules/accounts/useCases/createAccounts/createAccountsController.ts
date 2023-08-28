import { Request, Response } from "express";
import { CreateAccountsUseCase } from "./createAccountsUseCase";
import {hash} from 'bcryptjs'

class CreateAccountsController {
    async handler(req: Request, res: Response) {
        const {name, email, phone, cpf, master, password } = req.body

        const createAccountsUseCase = new CreateAccountsUseCase()
        const hashedPAssword = await hash(password, 10)
        console.log(hashedPAssword)
        const account = await createAccountsUseCase.execute({
            name,
            email, 
            phone, 
            cpf, 
            master,
            password: hashedPAssword
        })

        return res.status(201).json(account)
    }
}

export { CreateAccountsController}