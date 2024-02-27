// import { useState } from "react";
// import "./watch.css";
// import { Display } from "./movies";
// export default function WatchList({ watchList, mainMovies }) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [detail, setDetail] = useState([]);

//   const [hide, setHide] = useState(true);

//   function handleHide() {
//     setHide(!hide);
//   }

//   function open(id) {
//     setIsOpen(!isOpen);

//     const details = mainMovies.find((item) => item.id === id);
//     setDetail(details);
//   }
//   return (
//     <div className="watch">
//       <InitialWatchList handleHide={handleHide} watchList={watchList} />

//       {hide ? (
//         isOpen ? (
//           watchList.length === 0 ? (
//             <p>You have not watched any movies yet</p>
//           ) : (
//             [...watchList].reverse().map((item) => {
//               return <View items={item} key={item.id} open={open} />;
//             })
//           )
//         ) : (
//           <Detail detail={detail} setIsOpen={setIsOpen} isOpen={isOpen} />
//         )
//       ) : (
//         ""
//       )}

//       {/* <View /> */}
//     </div>
//   );
// }

// function View({ items, open }) {
//   return (
//     <div
//       style={{
//         border: "2px solid blue",
//         display: "flex",
//         borderRadius: "40px",
//         margin: "2px 10px",
//       }}
//       onClick={() => open(items.id)}
//     >
//       <img
//         style={{
//           width: "100px",
//           borderTopLeftRadius: "40px",
//           borderBottomLeftRadius: "40px",
//         }}
//         src={items.posterURL}
//         alt={items.title}
//       />
//       <div>
//         <p style={{ marginLeft: "30px" }}>title: {items.title}</p>
//         <p style={{ marginLeft: "30px" }}>id:{items.id}</p>
//         <p style={{ marginLeft: "30px" }}>rating{items.imdbId}</p>
//       </div>
//     </div>
//   );
// }

// function Detail({ detail, setIsOpen, isOpen }) {
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <span
//         role="img"
//         style={{ fontSize: "40px", cursor: "pointer" }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         ⬅️
//       </span>
//       <img
//         style={{ width: "80%", height: "200px", margin: "auto" }}
//         src={detail.posterURL}
//         alt={detail.id}
//       />

//       <h1
//         style={{ textAlign: "center", alignSelf: "center", marginLeft: "5px" }}
//       >
//         Title:{detail.title}
//       </h1>
//     </div>
//   );
// }

// function InitialWatchList({ handleHide, watchList }) {
//   const time = watchList.reduce((sum, cur) => {
//     return sum + cur.id;
//   }, 0);
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <p>Movies you watched</p>
//         <p>
//           <Display handleHide={handleHide} />
//         </p>
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <p>{watchList.length} Movies</p>
//         <p>{time}rating</p>
//         <p>time</p>
//       </div>
//     </>
//   );
// }
