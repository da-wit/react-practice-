import { useEffect, useState } from "react";

export default function useMovies(
  search
  //  callBack
) {
  const [mainMovies, setMainMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      // if (search !== "") {
      //   callBack?.();
      // }
      // const controller = new AbortController();
      async function getElement() {
        try {
          setIsLoading(true);
          const res = await fetch(
            "https://api.sampleapis.com/movies/animation"
            // { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Error");

          const data = await res.json();
          setMainMovies(data);
          setIsLoading(false);
        } catch (e) {
          console.log(e.message);
          setError(e.message);
        } finally {
          setIsLoading(false);
        }
        // console.log(data);
      }
      getElement();

      // return function () {
      //   controller.abort();
      //   console.log("abort");
      // };
    },
    [
      setError,
      setIsLoading,
      search,
      // callBack
    ]
  );
  return { mainMovies, error, isLoading };
}
