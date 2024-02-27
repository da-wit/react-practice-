import { useState } from "react";
import "./movies.css";

export default function Movies({
  filter,
  mainMovies,
  search,
  handleWatch,
  isLoading,
  error,
}) {
  const [hide, setHide] = useState(true);

  function handleHide() {
    setHide(!hide);
  }

  return (
    <div className="list">
      {/* {myMovies
        .filter((movie) => {
          return movie.title.toLowerCase().includes(search.toLowerCase());
        })
        .map((movies) => {
          return <ListMovies key={movies.id} movie={movies} />;
        }).length === 0 || <Message />} */}
      {/* 
      {filter.length !== 0 ? (
        filter.map((movies) => {
          return <ListMovies key={movies.id} movie={movies} />;
        })
      ) : (
        <Message />
      )} */}
      <Display handleHide={handleHide} />
      {isLoading ? (
        <Loading />
      ) : hide ? (
        filter.length !== 0 ? (
          filter.map((movies) => {
            return (
              <ListMovies
                key={movies.id}
                movie={movies}
                handleWatch={handleWatch}
              />
            );
          })
        ) : (
          <Message />
        )
      ) : (
        ""
      )}
      {/* {hide ? (
        filter.length !== 0 ? (
          filter.map((movies) => {
            return (
              <ListMovies
                key={movies.id}
                movie={movies}
                handleWatch={handleWatch}
              />
            );
          })
        ) : (
          <Message />
        )
      ) : (
        ""
      )} */}

      {/* {mainMovies
        .filter((movie) => {
          return movie.title.toLowerCase().includes(search.toLowerCase());
        })
        .map((movies) => {
          return <ListMovies key={movies.id} movie={movies} />;
        })}
      {mainMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      }).length === 0 && <Message />} */}
    </div>
  );
}
function ListMovies({ movie, handleWatch }) {
  return (
    <div
      className="movies"
      style={{ cursor: "pointer" }}
      onClick={() => handleWatch(movie.id)}
    >
      <img className="img" src={movie.posterURL} alt={movie.title} />
      <div className="values">
        <p>Title: {movie.title}</p>
        <p>Genre: {movie.id}</p>
        <p>⭐ {movie.imdbId}</p>
      </div>
    </div>
  );
}

function Message() {
  return <h2>Movie not found</h2>;
}

export function Display({ handleHide }) {
  return (
    <span
      style={{
        marginLeft: "auto",
        marginRight: "20px",

        cursor: "pointer",
        backgroundColor: "white",
        borderRadius: "100px",
        marginBottom: "10px",
      }}
      onClick={handleHide}
    >
      ➖
    </span>
  );
}

function Loading() {
  return (
    <h2 style={{ color: "green", fontSize: "30px", textAlign: "center" }}>
      Loading...
    </h2>
  );
}
