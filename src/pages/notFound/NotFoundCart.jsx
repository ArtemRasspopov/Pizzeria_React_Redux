import React from "react";

import Header from "../../components/header/Header";
import styles from "./NotFound.module.scss";

import notFoundImage from "../../assets/images/notfound-image.svg";

function NotFoundCart() {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <Header />
        <div className={styles.inner}>
          <h2>Корзина пустая 😕</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img src={notFoundImage} alt="not found" />
          <button className={styles.backButton}>Вернутся назад</button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundCart;
