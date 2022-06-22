import React from "react";
import styles from "./ProductItem.module.scss";

function ProductItem() {
  return (
    <li className={styles.inner}>
      <img
        className={styles.image}
        src={
          "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
        }
        alt="Pizza"
      />
      <h2 className={styles.title}>Чизбургер-пицца</h2>
      <div className={styles.selector}>
        <ul>
          <li className={styles.active}>Тонкое</li>
          <li>Традиционное</li>
        </ul>
        <ul>
          <li className={styles.active}>26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className={styles.add}>
        <p>от 395 ₽</p>
        <button className={styles.addButton}>
          + Добавить <span>2</span>
        </button>
      </div>
    </li>
  );
}

export default ProductItem;
