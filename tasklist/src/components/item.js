export default function Item({ itemObj, deleteItem, updateItem }) {
  // const [check,setCheck] = useState(itemObj.packed)
  return (
    <li>
      {/* style={itemObj.packed ? { textDecoration:"line-throught"}: {}} */}
      <input
        type="checkbox"
        value={itemObj.packed}
        checked={itemObj.packed}
        onChange={(e) => {
          updateItem(itemObj.id, e);
        }}
      />

      <span className={itemObj.packed ? "lines" : ""}>
        {itemObj.quantity} {""}
        {itemObj.description}
      </span>
      <button onClick={() => deleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
