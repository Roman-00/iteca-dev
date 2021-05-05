import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({category}) => {

    return (
        <div className="category__content">
            <h2 className="content__title">
                Уважаемый участник выставки! 
            </h2>
            <p className="home__content--except">
                На данной странице Вы можете заказать дополнительное оборудование и услуги:
            </p>
            <div className="category__card">
                {category.map((el) => (
                    <Link to={`/category/${el.strCategory}/${el.idCategory}`} className="card__to" key={el.idCategory}>
                        <div className="card">
                            <figure className="card__figure">
                                <img src={el.strCategoryThumb} alt={el.strCategory} className="card__image"/>
                            </figure>
                            <span className="card__to">
                                {el.strCategory}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )

}

export { CategoryList }