import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Forum from './pages/Forum';
import Home from './pages/Home';
import Profil from './pages/Profil';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/forum" exact component={Forum} />

            </Switch>
        </BrowserRouter>
    );
};

export default App;