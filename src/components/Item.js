import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)

  function addedToCart(event){
    setIsAdded(preVal => !preVal)   // or (!isAdded)
  }

  const appClass = isAdded ? "in-cart" : ""

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {addedToCart} className="add">{isAdded ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
