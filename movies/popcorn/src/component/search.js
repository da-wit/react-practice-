import {
  // useEffect
  useRef,
} from "react";
import "./search.css";
import useKey from "./useKey";

export default function Search({
  search,
  setSearch,
  mainMovies,
  filter,
  handle,
}) {
  const inputElement = useRef(null);

  useKey("Enter", function () {
    inputElement.current.focus();
    setSearch("");
  });
  // useEffect(
  //   function () {
  //     // inputElement.current.focus();

  //     function callBack(e) {
  //       if (e.code === "Enter") {
  //         // console.log("enter");
  //         inputElement.current.focus();
  //         setSearch("");
  //       }
  //     }
  //     document.addEventListener("keydown", callBack);

  //     return function () {
  //       document.removeEventListener("keydown", callBack);
  //     };
  //   },
  //   [setSearch]
  // );
  return (
    <div className="search">
      <PopCorn />
      <Input
        search={search}
        setSearch={setSearch}
        handle={handle}
        inputElement={inputElement}
      />
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

function Input({ search, setSearch, handle, inputElement }) {
  return (
    <div>
      <span style={{ fontSize: "25px", alignContent: "center" }}>🔎</span>
      <input
        className="input"
        type="search"
        value={search}
        placeholder="Enter the title"
        onChange={(e) => handle(e.target.value)}
        ref={inputElement}
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
