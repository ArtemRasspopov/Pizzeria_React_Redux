//libs
import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
//images
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link to={"/"} className={styles.logo} href={"/"}>
          <img src={logo} alt="logo" />
          <div>
            <h2>react pizza</h2>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
      </div>
      <Link to={"cart"} className={styles.button}>
        <div className={styles.sum}>520 ₽</div>
        <div className={styles.count}>3</div>
      </Link>
    </div>
  );
}

export default Header;
