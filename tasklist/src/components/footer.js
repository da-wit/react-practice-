export default function Footer({ item }) {
  const numItems = item.length;
  const packed = item.filter((items) => items.packed === true).length;
  const precent = Math.round((packed / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {item.length === 0
          ? "Start adding your list"
          : precent === 100
          ? "Ready to go "
          : `💼 You have ${numItems} items on your list and you already packed${" "}
        ${packed}(${precent}%)`}
      </em>
    </footer>
  );
}
