import React from 'react';

import { CartItem } from '../components/CartItem';

import download from '../images/download.svg';

export const Cart = ({order, addToBasket}) => {

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
                        order.map((item) => <CartItem key={item.idProduct} {...item} addToBasket={addToBasket}/>)
                        ) : (
                        <span>Корзина Пуста</span>
                    )}
                </ol>

                <div className="cart__total--price-result">
                    <span className="price__result--text">Итого по всем формам:</span> 
                    <span className="price__result--number">{Math.floor(tottalPrice * 100) / 100}</span>
                </div>

                <div className="cart__button--wrapper">
                    <button className="btn btn__cart btn--primary btn__send--order col-70">
                        <span>Отправить заказ на проверку для получения счета на оплату и 
                        финальной схемы стенда</span>
                    </button>
                    <button className="btn btn__cart btn--primary btn__procced col-30">
                        <span>Продолжить 
                        покупки</span> 
                    </button>
                </div>

                <div className="cart__content--document">
                    <h2 className="content__title cart__content--title">
                        Докумены, согласно заказанного 
                        оборудования:
                    </h2>
                    <ol className="document__list">
                        <li className="document__list--item">
                            <span className="document__list--item-name">
                                Счет на оплату
                            </span>
                            <a href="" className="btn--info btn--primary btn--document">
                                Скачать PDF
                                <div className="btn__icon">
                                    <img src={download} alt="Скачать PDF"/>
                                </div>
                            </a>
                        </li>
                        <li className="document__list--item">
                            <span className="document__list--item-name">
                                Дополнительное соглашение к договору
                            </span>
                            <a href="" className="btn--info btn--primary btn--document">
                                Скачать PDF
                                <div className="btn__icon">
                                    <img src={download} alt="Скачать PDF"/>
                                </div>
                            </a>
                        </li>
                    </ol>

                </div>

            </div>
        </div>
    )

}