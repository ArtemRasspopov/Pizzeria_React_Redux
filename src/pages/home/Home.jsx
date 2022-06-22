import React from "react";
import Categories from "../../components/categories/Categories";
import Header from "../../components/header/Header";
import Paginate from "../../components/paginate/Paginate";
import ProductItem from "../../components/productItem/ProductItem";
import Sort from "../../components/sort/Sort";
import styles from "./home.module.scss";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className={styles.menu}>
        <Categories />
        <Sort />
      </div>
      <div>
        <h2 className={styles.title}>Все пиццы</h2>
        <ul className={styles.itemsList}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
      </div>
      <Paginate />
    </div>
  );
}

export default Home;
