import React from 'react';

import { CartItem } from '../components/CartItem';

export const Cart = ({order}) => {

    const tottalPrice = order.reduce((sum, el) => {
        return sum + el.Price * el.quantity
    }, 0)

    return (
        <div className="wrapper__content">
            <h2 className="content__title cart__content--title">
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
                    <span className="price__result--text">Итого по всем формам:</span> 
                    <span className="price__result--number">{Math.floor(tottalPrice * 100) / 100}</span>
                </div>
                <div className="cart__button--wrapper">
                    <button className="btn btn__cart btn--primary btn__send--order">
                        Отправить заказ на проверку для получения счета на оплату и 
                        финальной схемы стенда
                    </button>
                    <button className="btn btn__cart btn--primary btn__procced">
                        <span>Продолжить 
                        покупки</span> 
                    </button>
                </div>
            </div>
        </div>
    )

}