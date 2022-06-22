import React from "react";
import styles from './Cart.module.scss'
import crossImage from '../../assets/images/cross.svg'

function CartItem() {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.image}
        src={
          "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
        }
        alt="Pizza"
      />
      <div className={styles.title}>
        <h3>Чизбургер-пицца</h3>
        <p>тонкое тесто, 30 см.</p>
      </div>
      <div className={styles.countButtons}>
        <button>-</button>
        <p>2</p>
        <button>+</button>
      </div>
      <p className={styles.sum}>350 ₽</p>
      <button className={styles.deleteItem}>
        <img src={crossImage} alt="cross" />
      </button>
    </div>
  );
}

export default CartItem;
