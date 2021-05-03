import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryList } from '../components/CategoryList';
import { ProdList } from '../components/ProdList';
import { Preloader } from '../components/Preloader';

import { getCategoryList } from '../services/api';
import { getProdList } from '../services/api';

const Category = () => {

    const { id } = useParams();
    const [category, setCategory] = useState({});
    const [prod, setProd] = useState({});

    useEffect(() => {

        getCategoryList()
            .catch((error) => {
                console.log(error)
            })
            .then((res) => {
                if(res.response?.status === 200) {

                    res.category.then((data) => {
                        setCategory(data.CategoryList)
                    })

                } else {    
                    console.log('Ошибка')
                }
            })

    }, []);

    useEffect(() => {
        getProdList(id)
            .catch((error) => {
                console.log(error)
            })
            .then((res) => {
                if(res.response?.status === 2000) {
                    res.prod.then((data) => {
                        setProd(data.ProdList);
                    })
                } else {
                    console.log('Ошибка')
                }
            })
    }, [id])

    return (
        <>
            {!category.length ? (
                <Preloader />
            ) : (
                <CategoryList  category={category}/>
            )}

            {!prod.length ? <Preloader /> : <ProdList prod={prod} />}
        </>
    );

}

export { Category };