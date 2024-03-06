import { useCities } from "../contexts/CitiesContext";
import CountryList from "./CountryList";
import Loading from "./Loading";

export default function Country() {
  const { isLoading, cities } = useCities();

  const countrys = cities.reduce((arr, curr) => {
    if (!arr.map((el) => el.country).includes(curr.country)) {
      return [...arr, { country: curr.country, emoji: curr.emoji }];
    } else return arr;
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {isLoading ? (
        <Loading />
      ) : (
        countrys.map((country) => (
          <CountryList countrys={country} key={country.country} />
        ))
      )}
    </div>
  );
}
