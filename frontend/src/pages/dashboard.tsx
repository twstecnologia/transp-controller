import ProtectRoute from "@/components/ProtectRoute";
import styles from '@/styles/pages/dashboard.module.css'
export default function Dashboard() {
  return (
    <ProtectRoute>
        <div className={styles.cardDashboard}>
            <aside>
                <div className={styles.cardImage}>
                    <h1>Titulo</h1>
                    <h2>Foto</h2>
                </div>
            </aside>
        </div>


    </ProtectRoute>

  )
}