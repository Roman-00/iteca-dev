import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from './routes/app.routes';


const App = () => {


    return (
       <Router>
           <main>
                <div className="content-wrapper">
                    <AppRoutes />
                </div>
           </main>
       </Router>
    );

}

export default App;