import React from 'react';

const ProdList = ({prod}) => {

    return (
        <>
            <div className="wrapper__content">
                <div className="category__content">
                    <h2 className="content__title">
                        Уважаемый участник выставки! 
                    </h2>
                    <p className="home__content--except">
                        На данной странице Вы можете заказать дополнительное оборудование и услуги:
                    </p>
                    <div className="category__card">
                        {prod.map((el) => (
                            <div className="card" key={el.idCategory}>
                                <figure className="card__figure">
                                    <img src={el.srtProductThumb} alt={el.strProduct} className="card__image"/>
                                </figure>
                                <span>{el.strProduct}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}

export { ProdList };