import React from 'react';
import { Link } from 'react-router-dom';

import stand from '../images/home-stand.png';
import edit from '../images/edit.svg';
import close from '../images/close.svg';
import { Info } from '../components/Info';

const Home = () => {

    return (
        <>

            <div className="wrapper__content">
                <h2 className="content__title">
                    Уважаемый Экспонент!
                </h2>
                <p className="home__content--except">
                    В этом разделе вы можете заказать дополнительные услуги, выбрать мебель и оборудование для Вашего 
                    стенда, а также ознакоситься с общей информацией, правилами и расписанием работы выставки. 
                </p>
                <figure className="home__content--figure">
                    <img src={stand} alt="Павильон" className="home__content--img"/>
                </figure>

                <div className="home__content--button">
                    <Link to='/services' className="btn btn--orange">
                        Заказать дополнительные услуги 
                    </Link>
                    <a href="" className="btn btn--primary">
                        Изменить существующий заказ
                        <div className="btn__icon">
                            <img src={edit} alt="Изменить существующий заказ"/>
                        </div>
                    </a>
                    <a href="" className="btn btn--primary">
                        Отказаться от технических услуг
                        <div className="btn__icon">
                            <img src={close} alt="Отказаться от технических услуг"/>
                        </div> 
                    </a>
                </div>
            </div>

            <div className="home__content--info">
                <Info/>
            </div>

        </>
    )
    
}

export { Home };