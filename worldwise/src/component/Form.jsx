import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useCities } from "../contexts/CitiesContext";
import useUrlPosition from "../hooks/useUrlPosition";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";

import ReactDatePicker from "react-datepicker";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  // const { getCity } = useCities();
  const [lat, lng] = useUrlPosition();
  console.log(lat, lng);

  const [isPositionLoading, setIsPositionLoading] = useState(false);
  const [isCity, setIsCity] = useState("");
  const [emoji, setEmoji] = useState("");

  const { createCity, setCities, cities } = useCities();

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchingCity() {
        try {
          setIsPositionLoading(true);
          setIsCity("");
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );
          if (!res.ok) throw new Error("Error while fetchin the city");
          const data = await res.json();
          if (!data.city) throw new Error("is not city");
          setCityName(data.city);
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
          console.log(data);
        } catch (error) {
          setIsCity("No a city");
          console.log(error.massage);
        } finally {
          setIsPositionLoading(false);
        }
      }
      fetchingCity();
    },
    [lat, lng]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    // console.log(newCity);
    createCity(newCity);
    navigate("/app/cities");
  }

  if (!lat && !lng) return;
  if (isCity) return <Error message={isCity} />;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          type="date"
          onChange={(e) => setDate(new Date(e.target.value).toISOString())}
          value={date}
        /> */}
        <ReactDatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" onclick={() => {}}>
          Add
        </Button>
        <Button
          type="back"
          onclick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;

function Error({ message }) {
  return <h1>{message}</h1>;
}
