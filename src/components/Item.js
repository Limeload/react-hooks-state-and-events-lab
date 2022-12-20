import React , {useState} from "react";

function Item({ name, category }) {
  const [isItem , addItems] = useState(false);

function handleAddToCart() {
  addItems((isItem) => !isItem);

}
  return (
    <li className={isItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
