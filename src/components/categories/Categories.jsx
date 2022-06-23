import React from "react";
import styles from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/FilterSlice";

function Categories() {
  const dispatc = useDispatch();
  const { category } = useSelector((state) => state.FilterSlice);

  console.log(category, "activeItem");

  const caregoriesItems = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  function changeCategory(index) {
    dispatc(setCategory(index));
  }

  return (
    <ul className={styles.list}>
      {caregoriesItems.map((item, index) => {
        return (
          <li
            key={index}
            className={category === index ? styles.active : ""}
            onClick={() => changeCategory(index)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
