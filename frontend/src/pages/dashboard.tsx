import ProtectRoute from "@/components/ProtectRoute";

export default function Dashboard() {
    return (
        <ProtectRoute>
            <h1>Dashboard</h1>
        </ProtectRoute>
        
    )
}