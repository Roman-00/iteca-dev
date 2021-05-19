import React from 'react';

export const CartItem = ({strProduct, Price, quantity}) => {
    return (
        <li className="cart__list--item">
            <div className="list__item--block">
                <span className="list__item--name">{strProduct}</span>
                <div className="cart__item--block-col">
                    <div className="content__btn_add--remove">
                        <button 
                            className="button-cart"
                        >
                            +
                        </button>
                        <button 
                            className="button-cart"
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
        </li>
    )
}