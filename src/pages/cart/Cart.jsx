import React from "react";
//components
import Header from "../../components/header/Header";
import CartItem from "./CartItem";
import NotFoundCart from "../notFound/NotFoundCart";
//redux
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/CartSlice";
//styles
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";

function Cart() {
  const { totalPrice, cartItems, quantity } = useSelector(
    (state) => state.CartSlice
  );
  const dispatch = useDispatch();

  function clearAllOnClick() {
    dispatch(clearCart());
  }

  return (
    <div className="container">
      <Header />
      {cartItems.length ? (
        <div className={styles.cart}>
          <div className={styles.cartTop}>
            <h2>Корзина</h2>
            <button onClick={clearAllOnClick}>Отчистить корзину</button>
          </div>
          <ul className={styles.itemsList}>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </ul>
          <div className={styles.info}>
            <p className={styles.count}>
              Всего пицц: <span>{quantity} шт.</span>
            </p>
            <p className={styles.sum}>
              Сумма заказа: <span>{totalPrice} ₽</span>
            </p>
          </div>
          <div className={styles.bottom}>
            <Link to={"/"} className={styles.goBack}>
              Вернуться назад
            </Link>
            <button className={styles.by}>Оплатить сейчас</button>
          </div>
        </div>
      ) : (
        <NotFoundCart />
      )}
    </div>
  );
}

export default Cart;
