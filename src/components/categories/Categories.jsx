import React from "react";
import styles from './Categories.module.scss'

console.log(styles)

function Categories() {
  return (
    <ul className={styles.list}>
      <li className={styles.active}>Все</li>
      <li>Мясные</li>
      <li>Вегетарианская</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li>
    </ul>
  )
}

export default Categories;
