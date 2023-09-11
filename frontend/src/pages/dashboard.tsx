import BodyApp from "@/components/BodyApp";
import ProtectRoute from "@/components/ProtectRoute";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
  return (
    <ProtectRoute>

          <BodyApp>
            <SideBar/>
          </BodyApp>
          
    </ProtectRoute>

  )
}