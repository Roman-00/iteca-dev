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

    const [send, sendCard] = React.useState(false);

    const [updateCart, setUpdateCart] = React.useState(false);

    const addToBasket = (item, type) => {

        setUpdateCart(true);

        const itemIndex = order.findIndex(
            (orderItem) => orderItem.idProduct === item.idProduct,
        )

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            if(type === 'add') {
                order[itemIndex].quantity = order[itemIndex].quantity + 1;
                setOrder(order)
            } else if (type === 'remove') {
                if (order[itemIndex].quantity === 1) {
                    setOrder(order.filter((el) => el.idProduct !== item.idProduct))
                } else if (order[itemIndex].quantity > 1) {
                    order[itemIndex].quantity = order[itemIndex].quantity - 1;
                    setOrder(order)
                }
            } else if (type === 'removeAll') {
                setOrder(order.filter((el) => el.idProduct !== item.idProduct))
            }
        }
        
        // 0 - попадаем в асинхронную функцию - почитать EventLoop
        const updater = setTimeout(updateCartInfo, 0);

        function updateCartInfo () {
            setUpdateCart(false);
            clearTimeout(updater);
        }

        console.log('order', order);
        console.log('order', JSON.stringify(order));
    }

    React.useEffect(() => {  
        if(send) {
            const sendBacket = async () => {
                const request = await fetch('https://itecaa-react-test-default-rtdb.firebaseio.com/ManagerData.json', {
                    method: 'POST',
                    body: JSON.stringify({
                        order: order,
                        lang: ''
                    })
                });

                const data = await request.json();

                return {
                    request, 
                    data
                }
            }

            sendBacket()
            .then((res) => {
                if(res.request.status === 200) {
                    console.log('Ок')
                }
            })
            .catch((error) => {
                console.error(error);
            }) 
        }
        sendCard(false);
        setOrder([]);
    }, [send])

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
                                <Cart updateCart={updateCart} order={order} addToBasket={addToBasket} sendCard={sendCard}/>
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