import { useState } from "react";
export default function Reciver({ setItem, handler }) {
  const arr = Array.from({ length: 20 }, (_, i) => i + 1);

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItems = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItems);

    handler(newItems);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {arr.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        name="input"
        value={description}
        onChange={(e) => {
          return setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
