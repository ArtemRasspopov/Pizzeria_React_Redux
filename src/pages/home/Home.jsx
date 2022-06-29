import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/slices/ItemsSlice";
import { setCurrentPage } from "../../redux/slices/FilterSlice";
//components
import Categories from "../../components/categories/Categories";
import Header from "../../components/header/Header";
import Paginate from "../../components/paginate/Paginate";
import ProductItem from "../../components/productItem/ProductItem";
import ItemBlockSkeleton from "../../components/productItem/ProductItemSkelleton";
import Sort from "../../components/sort/Sort";
import NotFoundItems from "../notFound/NotFoundItems";
//stiles
import styles from "./home.module.scss";

function Home() {
  const dispatc = useDispatch();
  const { items, status } = useSelector((state) => state.ItemsSlice);
  const { currentPage, category, sort } = useSelector(
    (state) => state.FilterSlice
  );
  const { serchValue } = useSelector((state) => state.SerchSlice);

  React.useEffect(() => {
    const categoryFilter = category > 0 ? `category=${category}` : "";
    const sortFilter = `sortBy=${sort.sortProperty}`;
    const serch = `search=${serchValue.trim()}`;
    const filters = { currentPage, categoryFilter, sortFilter, serch };

    getItems(filters);

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, category, sort, serchValue]);

  function getItems(filters) {
    dispatc(fetchItems(filters));
  }

  function onChangePage(pageIndex) {
    dispatc(setCurrentPage(pageIndex));
  }

  return (
    <div className="container">
      <Header />
      <div className={styles.menu}>
        <Categories />
        <Sort />
      </div>
      <div>
        <h2 className={styles.title}>Все пиццы</h2>
        {status === "error" ? (
          <NotFoundItems />
        ) : (
          <>
            <ul className={styles.itemsList}>
              {status === "loading"
                ? [...new Array(6)].map((_, index) => (
                    <ItemBlockSkeleton key={index} />
                  ))
                : items.map((item) => {
                    return <ProductItem key={item.id} itemObject={item} />;
                  })}
            </ul>
            <Paginate onChangePage={onChangePage} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
