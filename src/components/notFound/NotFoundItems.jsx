import React from "react";
import styles from "./NotFound.module.scss";

import notFoundImage from "../../assets/images/notfound-image.svg";

function NotFoundItems() {
  return (
    <div className={styles.notFound}>
      <div className={styles.inner}>
        <h2>Упс. Возникли проблемы 😕</h2>
        <p>
          Попробуйте проверить ваше интернет соединение и обновите страницу.
        </p>
        <img src={notFoundImage} alt="not found" />
      </div>
    </div>
  );
}

export default NotFoundItems;
