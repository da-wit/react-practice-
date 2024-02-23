import { useState } from "react";
import Item from "./item";
export default function View({
  item,
  onDeleteItem,
  onUpdateItem,
  handleClear,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItem;
  if (sortedBy === "input") {
    sortedItem = [...item];
  }
  if (sortedBy === "description") {
    sortedItem = [...item].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortedBy === "packed") {
    sortedItem = [...item].sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  if (sortedBy === "quantity") {
    sortedItem = [...item].sort(
      (a, b) => Number(a.quantity) - Number(b.quantity)
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            deleteItem={onDeleteItem}
            updateItem={onUpdateItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sorted by input</option>
          <option value="description">Sorted by description</option>
          <option value="packed">Sorted by packed</option>
          <option value="quantity">Sorted by number</option>
        </select>
      </div>

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
