import BodyApp from "@/components/BodyApp";
import SideBar from "@/components/SideBar";
export default function Users() {
    return (
        <BodyApp>
            <SideBar />
            <h1>Usuários</h1>
            
            <button>Cadastro</button>
            <button>Listar</button>
        </BodyApp>
    )
}