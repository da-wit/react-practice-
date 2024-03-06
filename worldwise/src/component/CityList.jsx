import { Link } from "react-router-dom";
import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";
import { Handler } from "leaflet";

export default function CityList({ city }) {
  const { currentCity } = useCities();
  const { deletCity } = useCities();
  // const navigate = useNavigate();
  const { cityName, emoji, date, id, position } = city;

  function change(date) {
    const time = new Date(date);
    const year = time.getFullYear().toString();
    const day = time.getMonth().toString();
    const month = time.getMonth().toString();

    // console.log(year);
    // console.log(day);
    // console.log(month);

    return `${month}/${day}/${year}`;
  }
  function handleClick(e) {
    e.preventDefault();
    console.log("test");
    console.log(e);
    console.log(id);
    deletCity(id);
  }

  return (
    <div>
      <Link
        className={`${id === currentCity.id ? styles.lists : styles.list}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h1>{cityName}</h1>
        <time>{change(date)}</time>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "rgb(69, 67, 67)",
            borderRadius: "100%",
            marginLeft: "20px",
            marginRight: "5px",
            cursor: "pointer",
          }}
        >
          ❌
        </button>
      </Link>
    </div>
  );
}
