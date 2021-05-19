import React from 'react';

import { Preloader } from '../components/Preloader';
import { ProdList } from '../components/ProdList';

import { getProdList } from '../services/api';


const Prod = ({order, addToBasket}) => {

    const [prod, setProd] = React.useState({})

    React.useEffect(() => {
        getProdList()
            .catch((error) => {
                console.log(error)
            })
            .then((res) => {
                if(res.response?.status === 200) {
                    setProd(res.prod.ProdList)
                } else {
                    console.log('Ошибка')
                }
            })
    }, [])

    return (
        <div className="wrapper__content">
            {!prod.length ? <Preloader /> : <ProdList prod={prod} addToBasket={addToBasket} order={order}/>}
        </div>
    )

}

export { Prod };