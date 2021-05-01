import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './Layout/Home';
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
    );
};

export default App;