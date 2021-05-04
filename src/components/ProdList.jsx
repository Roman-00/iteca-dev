import React from 'react';
import { useParams } from 'react-router-dom';

import dafaultImage from '../images/image-default.png';

const ProdList = ({prod}) => {

    const {id, title} = useParams();

    return (
        <div className="prod__content">
            <h2 className="content__title prod__title">
                {title}
            </h2>
            <div className="prod__card">
                {prod
                    .filter((el) => el.idCategory == id)
                    .map((el) => (
                        <div className="card" key={el.idProduct}>
                            {el.srtProductThumb ?
                                <figure className="card__figure card__figure--prod">
                                    <img src={el.srtProductThumb} alt={el.strProduct} className="card__image"/>
                                </figure>
                                :
                                <figure className="card__figure">
                                    <img src={dafaultImage} alt="card-default" className="card__image"/>
                                </figure>
                            }
                            <div className="card__content">
                                <div className="card__content--price">
                                    <span className="card__content--price">
                                        {el.Price}
                                    </span>
                                    <span className="card__content--curency">
                                        {el.Curency}
                                    </span>
                                </div>
                                <div className="card__content--quantity">
                                    <button className="button-cart">+</button>
                                    <span className="cart-list-item__count">2</span>
                                    <button className="button-cart">-</button>
                                </div>
                            </div>
                            <div className="card__content--buy">
                                <button className="card__button-buy">Купить</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export { ProdList };