import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss"

function Paginate() {
  return (
    <div>
      <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      // onPageChange={}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
    </div>
  );
}

export default Paginate;
