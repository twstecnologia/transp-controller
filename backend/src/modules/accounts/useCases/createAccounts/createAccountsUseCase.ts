import { PrismaClient, accounts } from '@prisma/client'
import {CreateAccountsDTO} from '../../dtos/createAccountsDTO'


const prisma = new PrismaClient()

class CreateAccountsUseCase {
    async execute({name, email, phone, cpf, master, password}: CreateAccountsDTO): Promise<accounts> {
        
        // const accountAllReadExists = await prisma.accounts.findFirst({
        //     where: {
        //         cpf: cpf
        //     }
        // })
        // console.log(accountAllReadExists)
        // if(accountAllReadExists){
        //     //consertar bug de erro por cadastrar account com mesmo cpf api esta parando
        //     throw new Error("Account allready exists")
        // }
        const account = await prisma.accounts.create({
            data: {
                name,
                email,
                phone,
                cpf,
                master,
                password
            }
        })
        return account
    }
}

export { CreateAccountsUseCase }