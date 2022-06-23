import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss"

function Paginate({onChangePage}) {

  return (
    <div>
      <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      renderOnZeroPageCount={null}
    />
    </div>
  );
}

export default Paginate;
