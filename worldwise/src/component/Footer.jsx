import styles from "./Footer.module.css"
export default function Footer() {
    const time = new Date()
  return (
    <div className={styles.footer}>All right reserved {time.toLocaleDateString()}</div>
  )
}
