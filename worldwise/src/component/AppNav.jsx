import { NavLink } from "react-router-dom"
import styles from "./AppNav.module.css"

export default function AppNav() {
  return (
       <nav className={styles.appNav}>
        <ul>
          <li><NavLink to="cities">Cities</NavLink>
        </li>
        <li><NavLink to="country">Country</NavLink></li>
        </ul>
    </nav>
  )
}
