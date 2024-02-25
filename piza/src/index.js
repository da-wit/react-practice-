import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="main">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 className="head">Fast React Pizza co.</h1>;
}

function Menu() {
  const piza = pizzaData;
  const numpiza = piza.length;

  const [item, setItem] = useState(pizzaData);

  const [load, setLoad] = useState(false);

  const [error, setError] = useState("");
  // useEffect(function () {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setItem(data));
  // }, []);

  useEffect(function () {
    async function setData() {
      try {
        setLoad(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("something went wrong will fetching");
        const data = await res.json();
        setItem(() => data);
        setLoad(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoad(false);
      }
    }
    setData();
  }, []);
  return (
    <div className="menu">
      <h2 className="menu-h2">Our menu</h2>
      <>
        {/* <p>welcome to our first react pizza app to order food </p> */}
        {numpiza > 0 ? (
          <ul className="piza">
            {/* {pizzaData.map((pizza) => <Pizza name={pizza.name} image={pizza.photoName} price = {pizza.price}  />)
      We can also do it in this way}  */}
            {/* {load ? (
              <Load />
            ) : (
              item.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.id} />)
            )} */}

            {load && <Load />}
            {!load &&
              !error &&
              item.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.id} />)}
            {error && <ErrorMessage message={error} />}
          </ul>
        ) : (
          <p>We are still woking on our menu please come back letter </p>
        )}
      </>
    </div>
  );
}
function Load() {
  return <h1>Loading----</h1>;
}

function ErrorMessage({ message }) {
  return (
    <p>
      <span>💀</span>
      {message}
    </p>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const isOpen = 7;
  const isClosed = 22;
  // if (isOpen <= hour && hour <= isClosed){
  //   return <footer className='footer'> We are currently Open</footer>
  // };  we can do it this way
  const open = isOpen <= hour && hour <= isClosed;

  return (
    <footer className="footer">
      {open ? (
        <Order openHour={isOpen} closeHour={isClosed} />
      ) : (
        <p>
          We are happy to welcome you between {isOpen}:00 and {isClosed}:00{" "}
        </p>
      )}
    </footer>
  );

  // const time = new Date().toLocaleTimeString()
  // return <footer className='footer'>{time} We are currently Open</footer>
}

function Order({ closeHour }) {
  const [order, setOrder] = useState(0);
  function handle() {
    return setOrder(order + 1);
  }
  return (
    <div>
      <p>we are open unitl {closeHour}:00, Come vist us or Order us online!</p>
      <p>Order:{order}</p>
      <button className="btn" onClick={handle}>
        Order
      </button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // if (props.pizzaObj. soldOut) return null;
  return (
    <li className={`pizza${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* <img src={props.image} alt={props.name}/>
    <div className='pizza-1'>
    <h1>{props.name}</h1>
    <p>{props.ingerdinat}</p>
    <span>{props.price + 4}</span> */}

      <img src={pizzaObj.image} alt={pizzaObj.id} />
      <div className="pizza-1">
        <h1>{pizzaObj.title}</h1>
        <p>{pizzaObj.description}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
