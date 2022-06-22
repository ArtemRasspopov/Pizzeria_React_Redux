import React from 'react'
import Header from '../../components/header/Header'
import styles from './Cart.module.scss'
import CartItem from './CartItem'

function Cart() {
  return (
    <div className='container'>
      <Header />
      <div className={styles.cart}>
        <div className={styles.cartTop}>
          <h2>Корзина</h2>
          <button>Отчистить корзину</button>
        </div>
        <ul className={styles.itemsList}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
        <div className={styles.info}>
          <p className={styles.count}>Всего пицц: <span>3 шт.</span></p>
          <p className={styles.sum}>Сумма заказа: <span>900 ₽</span></p>
        </div>
        <div className={styles.bottom}>
          <button className={styles.goBack}>Вернуться назад</button>
          <button className={styles.by}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default Cart