import {
  useNavigate,
  // useSearchParams
} from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";

import styles from "./Map.module.css";
import { useState, useEffect } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import useUrlPosition from "../hooks/useUrlPosition";
import Button from "./Button";

export default function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();

  // console.log(mapLat, mapLng);
  // console.log(mapPosition);
  const [mapLat, mapLng] = useUrlPosition();
  console.log(mapLat, mapLng);

  const {
    loading: isLoadingPosition,
    position: geolocationPosition,
    getLocation,
  } = useGeolocation();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  // console.log(currId)}
  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onclick={getLocation}>
          {isLoadingPosition ? "Loading..." : "use your current location"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.cityName} <br /> {city.country}
            </Popup>
          </Marker>
        ))}
        <OnChange position={mapPosition} />
        <DetectEvent />
      </MapContainer>
    </div>
  );
}

function OnChange({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectEvent() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      // console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
