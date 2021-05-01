import React from 'react';

import book from '../images/book.png';
import download from '../images/download.svg';

const Info = () => {

    return (

        <>
            <div className="wrapper__content info__content--wraper">

                <div className="info__conetnt">
                    <h2 className="content__title info__content--title">
                        Общая информация, расписание, правила:
                    </h2>

                    <div className="info__content--block">
                        <figure className="info__content--figure">
                            <img src={book} alt="Общая информация"/>
                        </figure>
                        <div className="info__content--text">
                            <ul className="info__content--list">
                                <li className="info__list--item">
                                    <span>План выставочного комплекса</span>
                                </li>
                                <li className="info__list--item">
                                    <span>Общая информация</span>
                                </li>
                                <li className="info__list--item">
                                    <span>Порядок работы в павильонах</span>
                                </li>
                                <li className="info__list--item">
                                    <span>Оборудованные стенды и чистая площадь</span>
                                </li>
                                <li className="info__list--item">
                                    <span>Противопожарные правила</span>
                                </li>
                                <li className="info__list--item">
                                    <span>Здоровье и безопасность</span>
                                </li>
                                <li className="info__list--item">
                                    <span>Доставка грузов и пр.</span>
                                </li>
                            </ul>
                            <p className="info__content--warning">*Обязательно к прочтению!</p>

                            <div className="info__content--button">
                                <a href="" className="btn--info btn--orange">
                                    Читать
                                </a>
                                <a href="" className="btn--info btn--primary">
                                    Скачать PDF
                                    <div className="btn__icon">
                                        <img src={download} alt="Скачать PDF"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );

}

export { Info };