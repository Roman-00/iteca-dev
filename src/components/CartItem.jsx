import React from 'react';

export const CartItem = ({idProduct, strProduct, Price, quantity, addToBasket}) => {

    return (
        <li className="cart__list--item">
            <div className="list__item--block">
                <span className="list__item--name">{strProduct}</span>
                <div className="list__item--wrapper">
                    <div className="cart__item--block-col">
                        <div className="content__btn_add--remove">
                            <button 
                                className="button-cart"
                                onClick={() =>
                                    addToBasket(
                                        {
                                            idProduct,
                                        },
                                        'add',
                                    )
                                }
                            >
                                +
                            </button>
                            <button 
                                className="button-cart"
                                onClick={() =>
                                    addToBasket(
                                        {
                                            idProduct,
                                        },
                                        'remove',
                                    )
                                }
                            >
                                -
                            </button>
                        </div>
                        <div className="cart__content--quantity">
                            <span className="cart-list-item__quantity">{quantity}</span>
                        </div>
                    </div>
                    <div className="cart__content--price">
                        <span className="cart-list-item__price">{Price}</span>
                    </div>
                </div>    
                {/*<div 
                    className="remove__item"
                    onClick={() =>
                        addToBasket(
                            {
                                idProduct,
                            },
                            'removeAll',
                        )
                    }
                >
                    Удалить
                </div>*/} 
            </div>
        </li>
    )
}