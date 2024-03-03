import React from 'react'
import styles from "./Logo.module.css"
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/"><div className={styles.div}>
        <img src='icon.png' alt='logo' className={styles.logo}/> <p> Worldwise</p>
        </div></Link>
  )
}
