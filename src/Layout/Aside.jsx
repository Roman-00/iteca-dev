import React from 'react';


const Aside = ({manager}) => {

    const { id, foto, name, title, email, tel, city, country } = manager;

    return (
        <>
            <div className="manager__info" id={id}>
                <h2 className="content__title manager__content--title">
                    Ваш менеджер:
                </h2>

                <figure className="manager__info--figure">
                    <img src={foto} alt={name} className="manager__ingo--img"/>
                </figure>

                <div className="manager__info--text">
                    <h3 className="manager__name">
                        {name}
                    </h3>
                    <span className="manager__position">
                        {title}
                    </span>
                    <div className="manager__contact">
                        <span className="manager__contact--email">
                            {email}
                        </span>
                        <span className="manager__contact--phone">
                            {tel}
                        </span>
                        <span className="manager__contact--city">
                            {city}
                        </span>
                        <span className="manager__contact--country">
                            {country}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )

}

export { Aside };