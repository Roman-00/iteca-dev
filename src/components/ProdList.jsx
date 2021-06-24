import React, {useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation, Autoplay} from 'swiper';
import "swiper/swiper-bundle";

SwiperCore.use([Pagination, Navigation, Autoplay]);

import dafaultImage from '../images/image-default.png';


const ProdList = ({prod, addToBasket, order}) => {

    const {id, title} = useParams();


    const autoAddToBasket = (idProduct,
                             strProduct,
                             Price, quantity) => {
        addToBasket(
            {
                idProduct,
                strProduct,
                Price,
            },
            'add',
            +quantity
        )
    }



    return (
        <div className="prod__content">
            <h2 className="content__title prod__title">
                {title}
            </h2>
            <div className="prod__card">
                {prod
                    .filter((el) => el.idCategory == id)
                    .map((el) => {
                        const {idProduct, strProduct, Price, Curency, srtProductThumb} = el
                        
                        const quantity = order.find((el) => el.idProduct === idProduct)
                            ?.quantity  ;

                        return (
                            <div className="card" key={idProduct}>
                                {srtProductThumb ?
                                    <Swiper 
                                        id="main"
                                        slidesPerView={1}
                                        loop={true}
                                        pagination
                                        autoplay
                                    >
                                        {srtProductThumb.map((item) => (
                                            <SwiperSlide>
                                                <figure className="card__figure card__figure--prod">
                                                    <img src={item.images} alt={strProduct} className="card__image"/>
                                                </figure>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    :
                                    <figure className="card__figure">
                                        <img src={dafaultImage} alt="card-default" className="card__image"/>
                                    </figure>
                                }
                                <div className="card__content">
                                    <div className="card__content--wrap">
                                        <h4 className="prod__card--title">
                                            {strProduct}
                                        </h4>
                                        <div className="card__content--price">
                                            <span className="card__content--price">
                                                {Price}
                                            </span>
                                            <span className="card__content--curency">
                                                {Curency}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card__content--quantity">
                                        <div className="content__quantity">
                                            <input value={quantity} defaultValue={0} type="number" onChange={(e) => {
                                                const updater = function() {
                                                    autoAddToBasket(
                                                        idProduct,
                                                        strProduct,
                                                        Price,
                                                        e.target.value
                                                    )
                                                }
                                                if(+e.target.value !== 0 ) {
                                                    e.target.addEventListener('mouseleave', updater);
                                                }
                                            }} />
                                        </div>
                                        <div className="content__btn_add--remove">
                                            <button 
                                                className="button-cart"
                                                onClick={() =>
                                                    addToBasket(
                                                        {
                                                            idProduct,
                                                            strProduct,
                                                            Price,
                                                        },
                                                        'add',
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                            <button 
                                                className="button-cart"
                                                onClick={() =>
                                                    addToBasket(
                                                        {
                                                            idProduct,
                                                            strProduct,
                                                            Price,
                                                        },
                                                        'remove',
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export { ProdList };