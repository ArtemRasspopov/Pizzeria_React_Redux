import React from "react";
import styles from "./Sort.module.scss";
import sortArrow from "../../assets/images/sort-arrow.svg";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/FilterSlice";

function Sort({ChangeSort}) {
  const [activeSortItem, setActiveSortItem] = React.useState(0);
  const [popupVisible, setPopupVisible] = React.useState(false);
  const sortRef = React.useRef();
  const dispatch = useDispatch()

  const sortList = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  //проверяет был ли клик по сортировке
  React.useEffect(() => {
    const handelClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setPopupVisible(false);
      }
    };
    document.body.addEventListener("click", handelClickOutside);
    return () => {
      document.body.removeEventListener("click", handelClickOutside);
    };
  }, []);

  function popupClick(index, item) {
    console.log(item)
    setActiveSortItem(index);
    setPopupVisible(false);
    dispatch(setSort(item))
  }

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={popupVisible ? styles.arrowopen : ''}>
        <img src={sortArrow} alt="arrow" />
      </div>
      Сортировка по:
      <span
        onClick={() => {
          setPopupVisible((prev) => !prev);
        }}
      >
        {sortList[activeSortItem].name}
      </span>
      {popupVisible && (
        <ul className={styles.popup}>
          {sortList.map((item, index) => (
            <li
              key={index}
              className={activeSortItem === index ? styles.active : ""}
              onClick={() => popupClick(index, item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sort;
