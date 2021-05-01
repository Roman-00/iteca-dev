import React from 'react';
import { useState, useEffect } from 'react';

import { CategoryItem } from '../components/CategoryItem';
import { Preloader } from '../components/Preloader';

import { getCategoryList } from '../services/api';

const CategoryList = () => {

    const [categoryList, setCategoryList] = useState({});
    const [isLoading, setLoading] = useState(false);

    React.useEffect(() => {
        setLoading(true)
        getCategoryList()
            .catch((error) => {
                console.log(error)
            })
            .then((res) => {
                console.log(res)
                if (res.response?.status === 200) {
                    res.category.then((data) => {
                        setCategoryList(data.CategoryList)
                        setLoading(false)
                    })
                } else {
                    console.log('Ошибка')
                }
            })
    }, [])

    return (
        <>
            <div className="wrapper__content">
                {!categoryList.length ? (
                    <Preloader />
                ) : (
                    <CategoryItem  categoryList={categoryList}/>
                )}
            </div>   
        </>
    );

}

export { CategoryList };