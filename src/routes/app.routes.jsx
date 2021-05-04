import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Layout/Home';
import { Services } from '../Layout/Services';
import { Category } from '../Layout/Category';
import { Prod } from '../Layout/Prod';
import { Aside } from '../Layout/Aside';

import { Preloader } from '../components/Preloader';
import { Calculator } from '../components/Calculator';

import { getDataInfo } from '../services/api';

const AppRoutes = () => {

    const [manager, setMamager] = React.useState({});
    const [nomenclatura, setNomenclatura] = React.useState({});
    const [object, setObject] = React.useState({});

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
            <main className="content">
                <Switch>
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
                    <Route exact path="/category/:title/:id" component={Prod}/>
                </Switch>
            </main>
            <aside className="sidebar sidebar1">
                <Aside  manager={manager}/>
            </aside>
        </div>
    )
}

export {AppRoutes};