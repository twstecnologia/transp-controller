import { Request, Response } from "express";
import { AuthenticateAccountUseCase } from "./AuthenticaAccountUseCase";

class AuthenticateController {
    async handle(req: Request, res: Response) {
        const { password, email } = req.body

        const authenticateUseCase = new AuthenticateAccountUseCase()


        const token = await authenticateUseCase.execute({
            password,
            email
        })

        res.status(200).json({token})
    }
}

export{ AuthenticateController }
