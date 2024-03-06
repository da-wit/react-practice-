// import styles from "./Cities.module.css";
import Loading from "./Loading";
import CityList from "./CityList";
import { useCities } from "../contexts/CitiesContext";

export default function Cities() {
  const { isLoading, cities } = useCities();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxHeight: "auto",
        overflowY: "scroll",
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        cities.map((city) => <CityList key={city.id} city={city} />)
      )}
    </div>
  );
}
