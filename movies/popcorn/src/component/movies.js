import "./movies.css";

export default function Movies({ filter, mainMovies, search }) {
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

      {filter.length !== 0 ? (
        filter.map((movies) => {
          return <ListMovies key={movies.id} movie={movies} />;
        })
      ) : (
        <Message />
      )}

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
function ListMovies({ movie }) {
  return (
    <div className="movies">
      <img className="img" src={movie.posterURL} alt={movie.title} />
      <div className="values">
        <p>Title: {movie.title}</p>
        <p>Genre: {movie.id}</p>
        <p>⭐ {movie.titl}</p>
      </div>
    </div>
  );
}

function Message() {
  return <h2>Movie not found</h2>;
}
