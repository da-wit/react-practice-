import Movies from "./movies";
import { useEffect, useState } from "react";
import Search from "./search";
// import WatchList from "./watchList";
import myMovies from "./data";
import "./watch.css";
import { Display } from "./movies";

export default function App() {
  const [search, setSearch] = useState("");
  const [mainMovies, setMainMovies] = useState(myMovies);
  const [watchList, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [detail, setDetail] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  function handleDelete(id) {
    setIsOpen(!isOpen);
    setWatchList(watchList.filter((item) => item.id !== id));
  }

  function handleDetail(detail) {
    console.log(detail);
    const add = mainMovies.find((item) => item.id === detail.id);
    console.log(add);
    if (watchList.some((movieId) => movieId.id === add.id)) {
      console.log("added");
    } else {
      setWatchList((watchList) => [...watchList, add]);
    }
    setIsOpen(!isOpen);
  }

  function handleWatch(id) {
    // console.log(watchList);
    // console.log(id);
    setIsOpen(false);
    setDetail(mainMovies.find((movie) => movie.id === id));
    console.log(detail);

    // const add = mainMovies.find((item) => item.id === id);
    // console.log(add);
    // if (watchList.some((movieId) => movieId.id === add.id)) {
    //   console.log("added");
    // } else {
    //   setWatchList((watchList) => [...watchList, add]);
    // }

    // console.log(watchList);
  }
  useEffect(
    function () {
      if (detail.title) return;
      document.title = `${detail.title}`;
    },
    [detail.title]
  );

  useEffect(
    function () {
      async function getElement() {
        try {
          setIsLoading(true);
          const res = await fetch(
            "https://api.sampleapis.com/movies/animation"
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
    },
    [setError, setIsLoading]
  );

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
        {error ? (
          <Error error={error} />
        ) : (
          <Movies
            search={search}
            myMovies={myMovies}
            mainMovies={mainMovies}
            filter={filter}
            handleWatch={handleWatch}
            isLoading={isLoading}
          />
        )}
        <WatchList
          watchList={watchList}
          mainMovies={mainMovies}
          detail={detail}
          setDetail={setDetail}
          handleDetail={handleDetail}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

function Error({ error }) {
  return <h3 style={{ textAlign: "center" }}>💀{error} </h3>;
}

export function WatchList({
  watchList,
  mainMovies,
  setDetail,
  detail,
  handleDetail,
  isOpen,
  setIsOpen,
  handleDelete,
}) {
  // const [isOpen, setIsOpen] = useState(true);
  // const [detail, setDetail] = useState([]);

  const [hide, setHide] = useState(true);

  function handleHide() {
    setHide(!hide);
  }

  function open(id) {
    setIsOpen(!isOpen);

    const details = mainMovies.find((item) => item.id === id);
    setDetail(details);
  }
  return (
    <div className="watch">
      <InitialWatchList handleHide={handleHide} watchList={watchList} />

      {hide ? (
        isOpen ? (
          watchList.length === 0 ? (
            <p>You have not watched any movies yet</p>
          ) : (
            [...watchList].reverse().map((item) => {
              return (
                <View
                  items={item}
                  key={item.id}
                  open={open}
                  handleDelete={handleDelete}
                />
              );
            })
          )
        ) : (
          <Detail
            detail={detail}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleDetail={handleDetail}
            watchList={watchList}
          />
        )
      ) : (
        ""
      )}

      {/* <View /> */}
    </div>
  );
}

function View({ items, open, handleDelete }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        display: "flex",
        borderRadius: "40px",
        margin: "2px 10px",
      }}
      onClick={() => open(items.id)}
    >
      <img
        style={{
          width: "100px",
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
        }}
        src={items.posterURL}
        alt={items.title}
      />
      <div>
        <p style={{ marginLeft: "30px" }}>title: {items.title}</p>
        <p style={{ marginLeft: "30px" }}>id:{items.id}</p>
        <p style={{ marginLeft: "30px" }}>
          rating{items.imdbId}{" "}
          <span
            style={{ marginLeft: "40px" }}
            onClick={() => handleDelete(items.id)}
          >
            ❌
          </span>
        </p>
      </div>
    </div>
  );
}

function Detail({ detail, setIsOpen, isOpen, handleDetail, watchList }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        role="img"
        style={{ fontSize: "40px", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ⬅️
      </span>
      <img
        style={{ width: "80%", height: "200px", margin: "auto" }}
        src={detail.posterURL}
        alt={detail.id}
      />

      <h1
        style={{ textAlign: "center", alignSelf: "center", marginLeft: "5px" }}
      >
        Title:{detail.title}
      </h1>
      {watchList.some((item) => item.id === detail.id) ? (
        console.log("Added")
      ) : (
        <button onClick={() => handleDetail(detail)}>ADD</button>
      )}
    </div>
  );
}

function InitialWatchList({ handleHide, watchList }) {
  const time = watchList.reduce((sum, cur) => {
    return sum + cur.id;
  }, 0);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Movies you watched</p>
        <p>
          <Display handleHide={handleHide} />
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>{watchList.length} Movies</p>
        <p>{time}rating</p>
        <p>time</p>
      </div>
    </>
  );
}
