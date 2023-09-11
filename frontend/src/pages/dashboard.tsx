import ProtectRoute from "@/components/ProtectRoute";
import SideBar from "@/components/SideBar";
import styles from '@/styles/pages/dashboard.module.css'

export default function Dashboard() {
  return (
    <ProtectRoute>
      <div className={styles.cardMain}>
        <SideBar/>
      </div>


    </ProtectRoute>

  )
}