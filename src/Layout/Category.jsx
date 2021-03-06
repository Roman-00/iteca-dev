import React from 'react';

import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';

import { getCategoryList } from '../services/api';

const Category = () => {

    const [category, setCategory] = React.useState({});

    React.useEffect(() => {
        getCategoryList()
            .catch((error) => {
                console.log(error)
            })
            .then((res) => {
                if(res.response?.status === 200) {
                    setCategory(res.category.CategoryList)
                } else {
                    console.log('Ошибка')
                }
            })
    }, [])

    return (
        <div className="wrapper__content">
            {!category.length ? <Preloader /> : <CategoryList category={category}/>}
        </div>
    )

}

export { Category };