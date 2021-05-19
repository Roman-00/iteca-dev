import React from 'react';
import { Link } from 'react-router-dom';

import BasketInfo from '../images/basket_info.png';

export const CartInfo = ({quantity}) => {
    return (
        <div className="cart__info">
            <img src={BasketInfo} alt="Информация о корзине" className="cart__info--thumb" />
            <Link to='/cart' className="cart__info--link">
                {quantity ? 
                    <span className="cart__info--quantity"><span>{quantity} товаров</span></span> 
                    : 
                    <span className="cart__info--quantity">
                        <span>0</span> товаров
                    </span>
                }
            </Link>
        </div>
    )
}