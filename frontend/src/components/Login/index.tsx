'use client'

import api from "@/config/axios"
import Cookies from "js-cookie"

import { useRouter } from 'next/navigation'
import { FormEvent, useState,  } from "react"
import swal from "sweetalert"

export default function Login() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const router = useRouter()

    async function handleLogin(e: FormEvent<HTMLFormElement>) {

        e.preventDefault()

        try {
            const { data } = await api.post('/accounts/authenticate', {
                email,
                password
            })

            if(data.token) {
                console.log(data.token)
                
                Cookies.set('token', data.token)
                
                router.push('dashboard')
            }
        } catch (err){
            console.log(err)
            swal({
                title: "Login inválido",
                text: "Usuário ou senha incorretos",
                icon: "error"
            })

        }

    }


    return (
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 className="font-bold text-2xl">Transp Controller</h3>
            <p className="text-gray-600 pt-2">Entre com seu usuário e senha.</p>
        </section>

        <section className="mt-10">
            <form className="flex flex-col" method="POST" encType="multipart/form-data" onSubmit={handleLogin}>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                    <input 
                    type="password" id="password" 
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Entrar</button>
            </form>
        </section>
    </main>
    )
}