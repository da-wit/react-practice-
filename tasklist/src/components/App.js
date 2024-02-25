import { useState } from "react";
import Reciver from "./form";
import Header from "./header";
import View from "./view";
import Footer from "./footer";

// const initialItems = [
//   { id: 1, description: "passport", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "tshirt", quantity: 6, packed: false },
//   { id: 4, description: "pen", quantity: 4, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdate(id, e) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

    // console.log(e.target.value);
    // console.log(e.target.checked);
    // console.log(items);
  }
  function clear() {
    if (items.length === 0) {
      alert("No item to Clear");
    } else {
      const cof = window.confirm("Do you want to clear it?");
      return cof === true ? setItems([]) : "";
    }
  }

  return (
    <div className="app">
      <Header />
      <Reciver handler={handleItem} />
      <View
        item={items}
        onDeleteItem={handleDelete}
        onUpdateItem={handleUpdate}
        handleClear={clear}
      />
      <Footer item={items} />
    </div>
  );
}
