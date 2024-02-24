import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const tabs = {
  backgroundColor: "gray",
  margin: "5px",
  color: "black",
  padding: "5px",
  borderRadius: "5px",
  cursor: "pointer",
};

const tab = {
  backgroundColor: "blue",
  margin: "5px",
  color: "white",
  padding: "5px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default function Tab() {
  const [item, setItem] = useState(0);

  function handleTab(num) {
    setItem(num);
  }

  return (
    <div>
      <Tabs num={0} handleTab={handleTab} item={item} />
      <Tabs num={1} handleTab={handleTab} item={item} />
      <Tabs num={2} handleTab={handleTab} item={item} />
      <Tabs num={3} handleTab={handleTab} item={item} />

      <div style={{ border: "1px solid gray", margin: "10px" }}>
        {item <= 2 ? (
          <Par
            content={content}
            item={item}
            key={content[item].summary}
            setItem={setItem}
          />
        ) : (
          <DiffentContent />
        )}
      </div>
    </div>
  );
}

function Tabs({ handleTab, num, item }) {
  return (
    <span
      onClick={() => handleTab(num)}
      style={num === item ? tab : tabs}
      role="button"
    >
      Tab {num + 1}
    </span>
  );
}

// const hided = {
//   display: "none",
// };
// const revile = {
//   display: "block",
//   marginLeft: "5px",
//   fontSize: "20px",
// };

function Par({ content, item, setItem }) {
  const [hide, setHide] = useState(true);

  function handleHide() {
    setHide(!hide);
  }

  const [num, setNum] = useState(0);
  function handleClick() {
    setNum((num) => num + 1);
  }
  function handle3Click() {
    setNum((num) => num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
  }

  return (
    <div>
      <p
        style={{
          color: "blue",
          fontSize: "30px",
          fontWeight: "bold",
          marginLeft: "20px",
        }}
      >
        {content[item].summary}
        {/* style={hide ? hided : revile} */}
      </p>
      <p>{hide && content[item].details}</p>
      <div>
        <span style={{ margin: "20px" }} role="button" onClick={handleHide}>
          {hide ? "Hide" : "Expand"}
        </span>
        <span style={{ marginLeft: "50px" }}>{num} ❤️ </span>
        <button onClick={handleClick}>➕</button>
        <button onClick={handle3Click}>➕➕➕</button>
      </div>
      <Undo setHide={setHide} setNum={setNum} />
    </div>
  );
}

function DiffentContent() {
  return (
    <p style={{ color: "red", fontSize: "25px", margin: "20px" }}>
      {" "}
      i dont have any content{" "}
    </p>
  );
}

// function HandR({ handleHide, hide }) {
//   const [num, setNum] = useState(0);
//   function handleClick() {
//     setNum(num + 1);
//   }
//   function handle3Click() {
//     setNum(num + 3);
//   }
//   return (
//     <div>
//       <span style={{ margin: "20px" }} role="button" onClick={handleHide}>
//         {hide ? "Hide" : "Expand"}
//       </span>
//       <span style={{ marginLeft: "50px" }}>{num} ❤️ </span>
//       <button onClick={handleClick}>➕</button>
//       <button onClick={handle3Click}>➕➕➕</button>
//     </div>
//   );
// }

function Undo({ setHide, setNum }) {
  function undo() {
    setHide(true);
    setNum(0);
  }
  function redo() {
    setTimeout(undo, 5000);
  }
  return (
    <div>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Undo in 2s</button>
    </div>
  );
}

{
  /* <span style={tabs} role="button">
        Tab 1
      </span>
      <span style={tabs} role="button">
        Tab 2
      </span>
      <span style={tabs} role="button">
        Tab 3
      </span>
      <span style={tabs} role="button">
        Tab 4
      </span> */
}
