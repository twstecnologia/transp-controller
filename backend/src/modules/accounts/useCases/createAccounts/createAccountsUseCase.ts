import { PrismaClient, accounts } from '@prisma/client'
import {CreateAccountssDTO} from '../../dtos/createAccountsDTO'

const prisma = new PrismaClient()

class CreateAccountsUseCase {
    async execute({name, email, phone, cpf, master}: CreateAccountssDTO): Promise<accounts> {
        const accountAllReadExists = await prisma.accounts.findFirst()

        if(accountAllReadExists){
            throw new Error("Account allready exists")
        }

        const account = await prisma.accounts.create({
            data: {
                name,
                email,
                phone,
                cpf,
                master
            }
        })
        return account
    }
}

export { CreateAccountsUseCase }