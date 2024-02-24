import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import Rate from "./rating";
import TextExpander from "./text";
import Tab from "./tab";

function Text({ defaultRating }) {
  const [movieRate, setMovieRate] = useState(0);
  return (
    <div>
      <Rate
        maxRating={10}
        color="blue"
        size={60}
        onMovieRate={setMovieRate}
        defaultRating={defaultRating}
      />
      <p>
        This movie has {movieRate > 0 ? movieRate : defaultRating} Star Rating
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Rate
      message={["Terriable", "Bad", "Okay", "Good", "Amazing"]}
      color="green"
      defaultRating={3}
    />
    <Rate maxRating={10} color="red" size={60} />
    <Rate size={80} />
    <Text defaultRating={4} />
    <br />
    <br />
    <br />
    <br />
    <br />
    <TextExpander
      collapsNumber={20}
      expand={"Show more"}
      collaps={"Show less"}
      expanded={false}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
      turpis vel elit interdum, a mollis lectus sagittis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
      turpis vel elit interdum, a mollis lectus sagittis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </TextExpander>

    <TextExpander
      collapsNumber={40}
      expand={"Expand"}
      collaps={"Collapes"}
      expanded={true}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
      turpis vel elit interdum, a mollis lectus sagittis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
      turpis vel elit interdum, a mollis lectus sagittis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
      turpis vel elit interdum, a mollis lectus sagittis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
      turpis vel elit interdum, a mollis lectus sagittis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </TextExpander>

    <TextExpander>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
      turpis vel elit interdum, elit. Donec lacinia turpis vel elit interdum, a
      mollis lectus sagittis. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit is.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas
    </TextExpander> */}
    <Tab />
  </React.StrictMode>
);
