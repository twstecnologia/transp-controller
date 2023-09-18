import BodyApp from "@/components/BodyApp";
import ProtectRoute from "@/components/ProtectRoute";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Rotas() {
    const [deliveryMan, setDeliveryMan] = useState('') 
    const [roteId, setRoteId] = useState('')
   function handleLogin() {}

    return (
        <ProtectRoute>
            
            <BodyApp>
                <SideBar/>

                <main style={{ width: '100%'}}>
                    <form method="POST" encType="multipart/form-data" onSubmit={handleLogin}>
                        <h1>Rotas</h1>
                        
                        <div>
                            <label className="" htmlFor="text">Motorista</label>
                            <input
                            type="text"
                            id="deliveryMan"
                            className=""
                            value={deliveryMan}
                            onChange={e => setDeliveryMan(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="" htmlFor="text">N T.O.</label>
                            <input
                            type="text"
                            id="roteId"
                            className=""
                            value={roteId}
                            onChange={e => setRoteId(e.target.value)}
                            />
                        </div>

                    </form>
                </main>

            </BodyApp>

        </ProtectRoute>
    )
}