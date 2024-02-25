import "./search.css";

export default function Search({
  search,
  setSearch,
  mainMovies,
  filter,
  handle,
}) {
  return (
    <div className="search">
      <PopCorn />
      <Input search={search} setSearch={setSearch} handle={handle} />
      <Found search={search} mainMovies={mainMovies} filter={filter} />
    </div>
  );
}

function PopCorn() {
  return (
    <div className="pop">
      <p>
        <span className="span" role="img">
          🍿
        </span>
        PopCorn
      </p>
    </div>
  );
}

function Input({ search, setSearch, handle }) {
  return (
    <div>
      <span style={{ fontSize: "25px", alignContent: "center" }}>🔎</span>
      <input
        className="input"
        type="search"
        value={search}
        placeholder="Enter the title"
        onChange={(e) => handle(e.target.value)}
      />
    </div>
  );
}

function Found({ mainMovies, filter }) {
  return (
    <p className="found">
      Found{" "}
      {
        `${mainMovies.length}  and filter ${filter.length} `
        // mainMovies.length
      }{" "}
      Movies
    </p>
  );
}
