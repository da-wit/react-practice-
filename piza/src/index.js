import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pizzaData } from './data';
import {useState } from 'react'



function App(){
  return <div className='main'>
    <Header/>
    <Menu/>
    <Footer/>
  </div>
}

function Header(){
  return <h1 className='head'>Fast React Pizza co.</h1>
}

function Menu(){
  const piza =pizzaData;
  const numpiza = piza.length;

  return <div className='menu'>
    <h2 className='menu-h2'>Our menu</h2>
    <>
    {/* <p>welcome to our first react pizza app to order food </p> */}
    {numpiza > 0 ? (<ul className='piza'>
      {/* {pizzaData.map((pizza) => <Pizza name={pizza.name} image={pizza.photoName} price = {pizza.price}  />)
      We can also do it in this way}  */}
      {pizzaData.map(pizza =>
        <Pizza pizzaObj ={pizza} key={pizza.name} />)}
   
    
    </ul>) : <p>We are still woking on our menu please come back letter </p>}

    </>
  </div>
   
}

function Footer(){
  const hour = new Date().getHours();
  const isOpen = 7;
  const isClosed = 22;
  // if (isOpen <= hour && hour <= isClosed){   
  //   return <footer className='footer'> We are currently Open</footer>
  // };  we can do it this way 
  const open = isOpen <= hour && hour <= isClosed;

  return <footer className='footer'>{open ? <Order openHour = {isOpen}
  closeHour = {isClosed}/> : (<p>We are happy to welcome you between {isOpen}:00 and {isClosed}:00 </p>)} 
     </footer>


  // const time = new Date().toLocaleTimeString()
  // return <footer className='footer'>{time} We are currently Open</footer>

}

function Order({closeHour}){
  const [order,setOrder] = useState(0)
  function handle(){
    return setOrder(order + 1)
  }
  return (<div>
    <p> 
    we are open unitl {closeHour}:00, Come vist us or Order us online!
     </p>
     <p>Order:{order}</p>
     <button className='btn' onClick={handle}>Order</button>
  </div>)

}

function Pizza({pizzaObj}){
  // if (props.pizzaObj. soldOut) return null;
  return  <li className={`pizza${pizzaObj.soldOut ? "sold-out": ""}`}>
    {/* <img src={props.image} alt={props.name}/>
    <div className='pizza-1'>
    <h1>{props.name}</h1>
    <p>{props.ingerdinat}</p>
    <span>{props.price + 4}</span> */}

      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div className='pizza-1'>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </div>
  </li>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
  <App/>
  
</React.StrictMode>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

