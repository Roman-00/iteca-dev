import React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route  } from 'react-router-dom';

import { Home } from './Layout/Home';
import { Services } from './Layout/Services';
import { CategoryList } from './Layout/CategoryList';
import { Aside } from './Layout/Aside';

import { Calculator } from './components/Calculator';
import { Preloader } from './components/Preloader';

import { getDataInfo } from './services/api';
import { Category } from './Layout/CategoryList';

const App = () => {

    const [manager, setManager] = useState({});
    const [nomenclatura, setNomenclatura] = useState({});
    const [object, setObject] = useState({});
    const [isLoading, setLoading] = useState(false);

    React.useEffect(() => {
        setLoading(true)
        getDataInfo()
          .catch((error) => {
            console.error(error)
          })
          .then((res) => {
            console.log(res)
            if (res.response?.status === 200) {
              //setObject(res.object)
              res.object.then((data) => {
                setManager(data.ManagerData)
                setObject(data.ObjectData)
                setNomenclatura(data.NomenklaturaList)
                setLoading(false)
              })
            } else {
              console.log('Ошибка')
            }
          })
      }, [])

    return (
        <>
            <main>

                <div className="content-wrapper">

                    <div className="container clearfix">
                        <Router>
                            {isLoading ? (
                                <Preloader />
                            ) : (
                                !isLoading && (
                                    <>
                                        <main className="content">
                                            <Switch>
                                                <Route exact path='/' component={Home}/>
                                                <Route path="/category" component={CategoryList}/>
                                                <Route path='/services'>
                                                    {!nomenclatura.length ? (
                                                        <Preloader />
                                                    ) : (
                                                        <div className="wrapper__content">
                                                            <Services nomenclatura={nomenclatura} object={object}/>
                                                            <Calculator object={object}/>
                                                        </div>
                                                    )}
                                                </Route>
                                            </Switch>
                                        </main>
                                        <aside className="sidebar sidebar1">
                                            <Aside manager={manager}/>
                                        </aside>
                                    </>
                                )
                            )}
                        </Router>
                    </div>

                </div>  

            </main>
        </>
    );

}

export default App;