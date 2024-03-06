import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getLocation() {
    if (!navigator.geolocation) {
      return setError("Your browser does not support geolocation");
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });

        setLoading(true);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  }

  return { loading, position, error, getLocation };
}
