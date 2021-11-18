import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Connexion from './pages/Connexion';
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
                <Route path="/connect" exact component={Connexion} />

            </Switch>
        </BrowserRouter>
    );
};

export default App;