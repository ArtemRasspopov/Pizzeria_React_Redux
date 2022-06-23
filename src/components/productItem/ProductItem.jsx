import React from "react";
import styles from "./ProductItem.module.scss";

function ProductItem({ imageUrl, title, types, sizes, price }) {
  const typesNames = ["Тонкое", "Традиционное"];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <li className={styles.inner}>
      <img className={styles.image} src={imageUrl} alt="Pizza" />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.selector}>
        <ul>
          {types.map((type, index) => {
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
          {sizes.map((size, index) => {
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
        <p>от {price} ₽</p>
        <button className={styles.addButton}>
          + Добавить <span>2</span>
        </button>
      </div>
    </li>
  );
}

export default ProductItem;
