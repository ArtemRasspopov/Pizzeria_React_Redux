import React from "react";
//redux
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/slices/CartSlice";

//styles
import styles from "./ProductItem.module.scss";

function ProductItem({ itemObject }) {
  const typesNames = ["Тонкое", "Традиционное"];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const dispatch = useDispatch();

  function addToCart() {
    const addedItem = { ...itemObject };
    addedItem.types = activeType;
    addedItem.sizes = itemObject.sizes[activeSize];
    dispatch(addCartItems(addedItem));
  }

  return (
    <li className={styles.inner}>
      <img className={styles.image} src={itemObject.imageUrl} alt="Pizza" />
      <h2 className={styles.title}>{itemObject.title}</h2>
      <div className={styles.selector}>
        <ul>
          {itemObject.types.map((type, index) => {
            return (
              <li
                key={index}
                className={activeType === index ? styles.active : ""}
                onClick={() => setActiveType(index)}
              >
                {typesNames[type]}
              </li>
            );
          })}
        </ul>
        <ul>
          {itemObject.sizes.map((size, index) => {
            return (
              <li
                key={index}
                className={activeSize === index ? styles.active : ""}
                onClick={() => setActiveSize(index)}
              >
                {size} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.add}>
        <p>от {itemObject.price} ₽</p>
        <button className={styles.addButton} onClick={() => addToCart()}>
          + Добавить
        </button>
      </div>
    </li>
  );
}

export default ProductItem;
