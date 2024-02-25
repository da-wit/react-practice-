import Movies from "./movies";
import { useEffect, useState } from "react";
import Search from "./search";
import WatchList from "./watchList";
import myMovies from "./data";

export default function App() {
  const [search, setSearch] = useState("");
  const [mainMovies, setMainMovies] = useState(myMovies);

  const [watchList, setWatchList] = useState([]);

  function handleWatch(id) {
    // console.log(watchList);
    // console.log(id);
    const add = mainMovies.find((item) => item.id === id);
    console.log(add);
    if (watchList.some((movieId) => movieId.id === add.id)) {
      console.log("added");
    } else {
      setWatchList((watchList) => [...watchList, add]);
    }
    // console.log(watchList);
  }

  useEffect(function () {
    async function getElement() {
      const res = await fetch("https://api.sampleapis.com/movies/animation");
      const data = await res.json();
      setMainMovies(data);
      // console.log(data);
    }
    getElement();
  }, []);

  const filter = mainMovies.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  // console.log(filter.length);
  function handle(value) {
    setSearch(() => value);
    console.log(value);
    console.log(filter);

    // setMainMovies(() => filter);
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        mainMovies={mainMovies}
        filter={filter}
        handle={handle}
      />
      <div style={{ display: "flex" }}>
        <Movies
          search={search}
          myMovies={myMovies}
          mainMovies={mainMovies}
          filter={filter}
          handleWatch={handleWatch}
        />
        <WatchList watchList={watchList} />
      </div>
    </div>
  );
}
