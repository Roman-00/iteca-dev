import React from 'react';

import dafaultImage from '../images/image-default.png';

const Services = ({nomenclatura, object}) => {
    
    const { maket_img, friza, maket } = object;

    return (
        <div className="services__content">
            <h2 className="content__title">
                Уважаемый участник выставки!
            </h2>
            <p className="home__content--except">
                Пожалуйста ознакомьтесь с оборудованием, которое уже включено в комплектацию Вашего стенда, 
                согласно заявке на участие:
            </p>
            <div className="services__content--grid">
                <div className="services__list">
                    <h3 className="services__list--name">
                        Список оборудования:
                    </h3>
                    <ol className="services__list--ul">
                        {nomenclatura && nomenclatura.map((el) => (
                            <li className="services__list--ul-item" key={el.id}>
                                <span className="services__list--item-name">
                                    {el.nomenklatura}
                                </span>
                                <span className="services__list--item-count">
                                    (кол-во: {el.count})
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="services__stand--layout">
                    <h3 className="services__list--name">
                        Схема Вашего базового стенда: 
                    </h3>
                    <div className="stand__layout--content">
                        <div className="sand__layout--maket">
                            {maket_img ? 
                                <figure className="stand__layout--figure">
                                    <img src={maket_img} alt={friza} className="stand__layout--images"/>
                                </figure>
                                :
                                <figure className="stand__layout--figure">
                                    <img src={dafaultImage} alt="default image" className="stand__layout--images"/>
                                </figure>                                        
                            }
                        </div>
                    </div>
                    <div className="stand__layout--button">
                        {maket ?
                            <a href={maket} target="_blank" className="btn--orange btn__stand--layout">
                                Скачать pdf
                            </a>
                            :
                            <a href="" className="btn--primary btn__stand--layout">
                                Запросить схему стенда 
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export { Services};