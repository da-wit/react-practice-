import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Button from "./Button";
export default function City() {
  const { currentCity, getCity, isLoading } = useCities();
  const { id } = useParams();
  const navigate = useNavigate();

  const { emoji, cityName, notes, date } = currentCity;

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <Loading />;

  return (
    <div className={styles.main}>
      <div>
        <h6>City Name</h6>
        <h3>
          <span>{emoji}</span>
          {cityName}
        </h3>
      </div>

      <div>
        <h6>you went to cityname on</h6>
        <h3>{date}</h3>
      </div>
      <div>
        <h6>Your note</h6>
        <h3>{notes}</h3>
      </div>

      <div>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          {`CheckOut city ${cityName} on wikipiar ....`}
        </a>
      </div>
      <Button
        type="back"
        onclick={() => {
          navigate(-1);
        }}
      >
        &larr;back
      </Button>
    </div>
  );
}
