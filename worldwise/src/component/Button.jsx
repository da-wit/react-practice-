import styles from "./Button.module.css";
export default function Button({ type, onclick, children }) {
  return (
    <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
