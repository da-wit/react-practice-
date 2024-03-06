import styles from "./CountryList.module.css";
export default function CountryList({ countrys }) {
  const { emoji, country } = countrys;

  return (
    <ul className={styles.main}>
      <li>
        <p>{emoji}</p>
        <p>{country}</p>
      </li>
    </ul>
  );
}
