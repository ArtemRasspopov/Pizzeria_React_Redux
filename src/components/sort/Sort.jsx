import React from "react";
import styles from "./Sort.module.scss";
import sortArrow from "../../assets/images/sort-arrow.svg";

function Sort() {
  return (
    <div className={styles.sort}>
      <div className={styles.arrowopen}>
        <img src={sortArrow} alt="arrow" />
      </div>
      Сортировка по: <span>популярности</span>
      <ul className={styles.popup}>
        <li className={styles.active}>Популярности</li>
        <li>По цене</li>
        <li>По алфавиту</li>
      </ul>
    </div>
  );
}

export default Sort;
