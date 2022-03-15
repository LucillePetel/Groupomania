import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const Log = () => {

    const [signUpModal, setSignUpModal] = useState(true);
    const [loginModal, setLoginModal] = useState(false);

    const modals = (e) => {
        if (e.target.id === "register") {
            setLoginModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setLoginModal(true);
            setSignUpModal(false);
        }
    }


    return (
        <div className='connect-form'>
            <div className='form-contain'>
                <ul>
                    <li onClick={modals} id="register" className={signUpModal ? "active-button" : null}>S'inscrire</li>
                    <li onClick={modals} id="login" className={loginModal ? "active-button" : null}>Se connecter</li>
                </ul>
                {signUpModal && <SignUpForm />}
                {loginModal && <LoginForm />}
            </div> 
            <div>
                <img src='./img/icon.png' alt='logo groupomania' className='logo-connect'/>
            </div>
        </div>
    );
};

export default Log;