import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './Layout/Home';
<<<<<<< HEAD
import { Aside } from './Layout/Aside';

const App = () => {
    return (
        <main>
            <div className="content-wrapper">
                <div className="container clearfix">
                    <Router>
                        <Switch>
                            <>
                                <div className="content">
                                    <Route exact path='/' component={ Home }/>
                                    <Route path='/aside' component={ Aside }/>
                                </div>
                                <aside className="sidebarsidebar1">
                                    <Aside />
                                </aside>
                            </>
                        </Switch>
                    </Router>   
                </div>
            </div>
        </main>
=======

const App = () => {
    return (
        <>
            <Home />
            <h1>Help me please!!!! Reg.iteca won't load</h1>
       </>
>>>>>>> 10e20dd74a3796390739425faa4efbec1dbb59bd
    );
};

export default App;