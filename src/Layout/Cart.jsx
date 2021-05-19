import React from 'react';

import { CartItem } from '../components/CartItem';

export const Cart = ({order}) => {

    const tottalPrice = order.reduce((sum, el) => {
        return sum + el.Price * el.quantity
    }, 0)

    return (
        <div className="wrapper__content">
            <h2 className="content__title">
                Итоговая форма
            </h2>
            <div className="cart__content">
                <ol className="cart__content--list">
                    {order.length ? (
                        order.map((item) => <CartItem key={item.idProduct} {...item}/>)
                        ) : (
                        <span>Корзина Пуста</span>
                    )}
                </ol>
                <div className="cart__total--price-result">
                    Итого: {Math.floor(tottalPrice * 100) / 100}
                </div>
            </div>
        </div>
    )

}