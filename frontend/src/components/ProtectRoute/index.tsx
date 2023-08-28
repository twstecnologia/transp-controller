import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthCookie } from "@/config/auth";

import swal from "sweetalert"

export default function ProtectRoute({ children }: any) {
    const router = useRouter()
    const token = getAuthCookie()
    useEffect(() => {
        if(!token) {
            
            router.push('/error')
            swal({
                title: "Acesso Negado",
                text: "Você não tem permissão para acessar esta pagina.",
                icon: "error"
            })
            router.push('/')

        }
    }, [token, router])

    return<>{children}</>
}