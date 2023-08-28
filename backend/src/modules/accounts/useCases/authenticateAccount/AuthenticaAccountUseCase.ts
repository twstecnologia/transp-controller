import { PrismaClient, accounts } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

interface IRequest {
    email: string;
    password: string;
  }


const SECRET_KEY = 'sua_chave_secreta';

class AuthenticateAccountUseCase {

    async execute({email, password}: IRequest) {

        const user = await prisma.accounts.findUnique({ where: {
            email
        } })

        const userPass = user?.password as string

        const passwordCompare = bcrypt.compare(password, userPass)

        if(!user) {
            throw new Error("Email or password incorrect")
        } 

        if(!passwordCompare) {
            throw new Error("Email or password incorrect")
        } 
        
        const token = jwt.sign({email}, SECRET_KEY, { expiresIn: '24h'})
        return token
    }
}

export { AuthenticateAccountUseCase }