import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  const [location] = useSearchParams();
  const mapLat = location.get("lat");
  const mapLng = location.get("lng");

  return [mapLat, mapLng];
}
