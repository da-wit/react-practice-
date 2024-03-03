// import Logo from "../component/Logo"
import SideBar from "../component/SideBar"
import styles from "./AppLayout.module.css"
import Map from "../component/Map"
export default function AppLayout() {
  return (
    <div className={styles.app}>
        <SideBar/>
        <Map/>
    </div>
  )
}
