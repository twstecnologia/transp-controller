import BodyApp from "@/components/BodyApp";
import ProtectRoute from "@/components/ProtectRoute";
import SideBar from "@/components/SideBar";

export default function Rotas() {
    return (
        <ProtectRoute>
            
            <BodyApp>
                <SideBar/>

                <main style={{backgroundColor: '#a8a3a3cc', width: '100%'}}>
                    <form action="">
                        <h1>Rotas</h1>
                    </form>
                </main>

            </BodyApp>

        </ProtectRoute>
    )
}