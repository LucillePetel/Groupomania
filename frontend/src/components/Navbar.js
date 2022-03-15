import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src='./img/navbar.png' alt='logo groupomania navbar' className='logo-navbar'/>
            </div>
            <div className='info-connect'>
                <h5>Bienvenue 'Ajouter variable'</h5>
                <button className='button-exit' type='button'>Se déconnecter</button>
            </div>
            
        </nav>
    );
};

export default Navbar;