import { useState, useEffect } from "react";
export default function useLocalStorageState(initial, key) {
  const [watchList, setWatchList] = useState(function () {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(watchList));
    },
    [watchList, key]
  );

  return [watchList, setWatchList];
}
