import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Connect from './pages/Connect';
import Home from './pages/Home';
import Profil from './pages/Profil';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profil" exact element={<Profil />} />
                <Route path="/connect" exact element={<Connect />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;