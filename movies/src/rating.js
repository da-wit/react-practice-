// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import PropTypes from "prop-types";

const view = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const rateing = {
  display: "flex",
  gap: "4px",
};

Rate.prototype = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.array,
  defaultRating: PropTypes.number,
  onMovieRate: PropTypes.func,
};

export default function Rate({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  message = [],
  defaultRating = 2,
  onMovieRate,
}) {
  const [rate, setRate] = useState(defaultRating);
  const [tempRate, setTempRate] = useState(0);

  function handleRate(rating) {
    setRate(rating);
    // onMovieRate(rating);
  }

  function handleMouseEnter(temprating) {
    return setTempRate(temprating);
    // console.log("enter");
  }

  function handleMouseOut(temprating) {
    return setTempRate(temprating);
    // console.log("leave");
  }

  const text = {
    lineHeight: "1",
    margin: "0",
    color: color,
    fontSize: size / 1.6,
  };

  const star = {
    width: size,
    height: size,
    display: "block",
    cursor: "pointer",
  };

  return (
    <div style={view}>
      <div style={rateing}>
        {Array.from({ length: maxRating }, (_, i) => (
          //   <span key={i}>S{i + 1}</span>
          <Star
            key={i}
            setRate={setRate}
            click={() => handleRate(i + 1)}
            onMouse={() => handleMouseEnter(i + 1)}
            outMouse={() => handleMouseOut(0)}
            full={tempRate ? tempRate >= i + 1 : rate >= i + 1}
            i={i}
            star={star}
            color={color}
          />
        ))}
      </div>
      {/* {tempRate ? tempRate || "" : rate || ""} */}
      <p style={text}>
        {message.length === maxRating
          ? message[tempRate ? tempRate - 1 : rate - 1]
          : tempRate || rate || ""}
      </p>
    </div>
  );
}

function Star({ click, full, onMouse, outMouse, star, color }) {
  return (
    <span
      role="button"
      style={star}
      onClick={click}
      onMouseEnter={onMouse}
      onMouseLeave={outMouse}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
