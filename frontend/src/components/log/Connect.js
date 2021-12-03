import React, { useState } from 'react';
import Login from './Login';
import SignUp from './Signup';

const Connect = () => {
    const [signUpModal, setSignUpModal] = useState(false);        
    const [loginModal, setLoginModal] = useState(true); 

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setLoginModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);   
            setLoginModal(true);
        }
    }

    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : null}>S'inscrire</li>
                    <li onClick={handleModals} id="login" className={loginModal ? "active-btn" : null}>Se connecter</li>
                </ul>

                {signUpModal && <SignUp />}
                {loginModal && <Login />}
            </div>            
        </div>
    );
};

export default Connect;