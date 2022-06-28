import React from "react";
import styles from "./Cart.module.scss";
import crossImage from "../../assets/images/cross.svg";
//redux
import { useDispatch } from "react-redux";
import {
  addCartItems,
  minusItem,
  removeItem,
} from "../../redux/slices/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const typesNames = ["Тонкое", "Традиционное"];

  function removeItemOnClick() {
    dispatch(removeItem(item));
  }

  function countPlusClick() {
    dispatch(addCartItems(item));
  }

  function countMinusClick() {
    if (item.count > 1) {
      dispatch(minusItem(item));
    } else {
      dispatch(removeItem(item));
    }
  }

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
        <h3>{item.title}</h3>
        <p>
          {typesNames[item.types]} тесто, {item.sizes} см.
        </p>
      </div>
      <div className={styles.countButtons}>
        <button onClick={countMinusClick}>-</button>
        <p>{item.count}</p>
        <button onClick={countPlusClick}>+</button>
      </div>
      <p className={styles.sum}>{item.sumPrice} ₽</p>
      <button className={styles.deleteItem} onClick={removeItemOnClick}>
        <img src={crossImage} alt="cross" />
      </button>
    </div>
  );
}

export default CartItem;
