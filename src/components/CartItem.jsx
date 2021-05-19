import React from 'react';

export const CartItem = ({strProduct, Price, quantity}) => {
    return (
        <li className="cart__list--item">
            <span className="list__item--name">{strProduct}</span>
            <div className="list__item--block">
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
                <div className="content__quantity">
                    <span className="cart-list-item__count">{quantity}</span>
                </div>
            </div>
            <div className="content__quantity">
                <span className="cart-list-item__count">{Price}</span>
            </div> 
        </li>
    )
}