import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="search">
                <input type="search"></input> 
                <i class="fas fa-search"></i>
            </div>
            <div className="logo" >
                <img src='./img/logo.png' alt="logo Groupomania" />   
            </div>
            <div>

            </div>
        </header>
        
    );
};


export default Header;