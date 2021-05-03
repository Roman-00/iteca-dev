import React from 'react';
import { useParams } from 'react-router-dom';

const ProdList = ({prod}) => {

    const {id} = useParams();

    return (
        <div className="category__content">
            <h2 className="content__title">
                Название категории
            </h2>
            <div className="category__card">
                {prod
                    .filter((el) => el.idCategory == id)
                    .map((el) => (
                        <div className="card" key={el.idProduct}>
                            <figure className="card__figure">
                                <img src={el.srtProductThumb} alt={el.strProduct} className="card__image"/>
                            </figure>
                            <div className="card__content">
                                <span className="card__content--price">
                                    {el.Price}
                                </span>
                                <span className="card__content--curency">
                                    {el.Curency}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export { ProdList };