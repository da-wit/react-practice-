import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];


function App(){
    return <div className='container'>
        <Header/>
        <Menu/>
        <Footer/>
        </div>;
}

function Header(){
    // const style = {color: 'red',fontSize: '40px', textTransform:'uppercase',textAlign:'center'};
    return (
     <header className= "header">
    <h1>First React Pizza co.</h1>
    </header>
    ); 
}

function Menu(){
    return <main className="menu">
        <h2>Our Menu</h2>

        <ul className="pizzas">
            {/* {pizzaData.map(pizza => <Pizza name={pizza.name}
            photoName={pizza.photoName}
            ingredients={pizza.ingredients}
            price={pizza.price}/>)} */}

            {pizzaData.map((pizza)=>(
                <Pizza pizzaobj={pizza} key={pizza.name}/>
            ))}
        </ul>
        
    {/* <Pizza name='Focaccia' 
    ingredients='Bread with italian olive oil and rosemary'
    photoName="pizzas/focaccia.jpg"
    price ={6}
    />

    <Pizza name='Pizza Margherita' 
    ingredients='Tomato and mozarella'
    photoName="pizzas/margherita.jpg"
    price ={10}
    /> */}
    
    </main> 
}
function Pizza(props){  
    return <li className="pizza">
        <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name}/>
        <div>
            <h3>{props.pizzaobj.name}</h3>
            <p>{props.pizzaobj.ingredients}</p>
            <span>{props.pizzaobj.price + 3}</span>
        </div>
    </li>
}
function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    const isOpen =hour >= openHour && hour <= closeHour;
    console.log(isOpen)

    // if(hour >= openHour && hour <= closeHour){
    //     alert("we are currently open!")
    // }else{
    //     alert("Sorry we are closed");
    // }

    return <footer className="footer">{new Date().toLocaleTimeString()} We are Currently Open!</footer>
    // React.createElement('footer',null,"We are Currently Open1")
}


const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);