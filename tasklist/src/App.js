import { useState } from "react"

const initialItems=[
  {id:1,description:'passport',quantity:2,packed:false},
  {id:2,description:'Socks',quantity:12,packed:false},
  {id:3,description:'tshirt',quantity:6,packed:false},
  {id:4,description:'pen',quantity:4,packed:true},
]

export default function App(){
  return <div className="app">
    <Header/>
    <Reciver/>
    <View/>
    <Footer/>
  </div>

}

function Header(){
  return <h1>🌴Far Away 💼</h1> 
}

function Reciver(){
  const arr = Array.from({length:20}, (_,i)=>i +1)

  const [description,setDescription] = useState("");
  const [quantity,setQuantity] = useState(1)

  function handleSubmit(e){
    e.preventDefault();
    if (!description){
      return
    }
    const newItems = {description,quantity,packed:false,id:Date.now()}
    console.log(newItems)

    setDescription('')
    setQuantity(1)
  }
  
  return( 
  <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip?</h3>
    <select  value={quantity} onChange={e=>setQuantity(Number(e.target.value))}>{
      arr.map((num)=>
      <option value={num} key={num}>{num}</option>)}
    </select>    
    <input type="text" placeholder="Items..." name="input" value={description} onChange={e => {
       return setDescription(e.target.value)}}/>
    <button>Add</button>
  </form> )
}

function View(){
  return (
  <div className="list">
    <ul>
      {initialItems.map((item)=>
      <Item itemObj = {item} key={item.id}/>)}
    </ul>
  </div>




)}

function Item({itemObj}){
  return <li>
    {/* style={itemObj.packed ? { textDecoration:"line-throught"}: {}} */}
    <span className={itemObj.packed? "lines": ""}>
    {itemObj.quantity } 
    {itemObj.description}
    </span>
    <button>❌</button>
    </li>
}

function Footer(){
  return <footer className="stats">
    <em>💼 You have X itemson your list and you already packed X(%x)</em>
  </footer>

}