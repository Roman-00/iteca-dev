import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Layout/Home';
import { Services } from '../Layout/Services';
import { Category } from '../Layout/Category';
import { Prod } from '../Layout/Prod';
import { Aside } from '../Layout/Aside';
import { Cart } from '../Layout/Cart';

import { Preloader } from '../components/Preloader';
import { Calculator } from '../components/Calculator';

import { getDataInfo } from '../services/api';
import { CartInfo } from '../components/CartInfo';

const AppRoutes = () => {

    const [manager, setMamager] = React.useState({});
    const [nomenclatura, setNomenclatura] = React.useState({});
    const [object, setObject] = React.useState({});
    const [order, setOrder] = React.useState([]);

    const addToBasket = (item, type) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.idProduct === item.idProduct,
        )

        console.log('item', item);

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            order.forEach((orderItem, index) => {
                const newOrder = order.filter((el) => el.idProduct !== item.idProduct)
                if (index === itemIndex) {
                    if(type === 'add') {
                        const targetOrder = {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                        setOrder([...newOrder, targetOrder])
                    } else if (type === 'remove' && orderItem.quantity === 1) {
                        setOrder(order.filter((el) => el.idProduct !== item.idProduct))
                    } else if (type === 'remove' && orderItem.quantity > 1) {
                        const targetOrder = {
                            ...orderItem,
                            quantity: orderItem.quantity - 1,
                        }
                        setOrder([...newOrder, targetOrder])
                    }
                }
            })
        }
    }

    React.useEffect(() => {
        getDataInfo()
            .catch((error) => {
                console.log(error)
            })
            .then((res) => {
                if(res.response?.status === 200) {
                    setMamager(res.object.ManagerData)
                    setNomenclatura(res.object.NomenklaturaList)
                    setObject(res.object.ObjectData)
                } else {
                    console.log('Ошибка')
                    //throw new Error(`Could not fetch, recieved ${response.status}`);
                }
            })
    }, [])

    return (
        <div className="container clearfix">
            <Switch>
                <>
                    <main className="content">
                    
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/services">
                                {!nomenclatura.length && !object.length ? <Preloader /> : (
                                    <div className="wrapper__content">
                                        <Services  nomenclatura={nomenclatura} object={object}/>
                                        <Calculator object={object} />
                                    </div>
                                )}
                            </Route>
                            <Route exact path="/category" component={Category} />
                            <Route exact path="/category/:title/:id">
                                <Prod addToBasket={addToBasket} order={order} />
                            </Route>
                            <Route exact path="/cart">
                                <Cart order={order} addToBasket={addToBasket}/>
                            </Route>
                    </main>
                    <aside>
                        <div className="sidebar sidebar2">
                            <CartInfo quantity={order.length}/>
                        </div>
                        <div className="sidebar sidebar1">
                            <Aside  manager={manager}/>
                        </div>
                    </aside>
                </>
            </Switch>
        </div>
    )
}

export {AppRoutes};