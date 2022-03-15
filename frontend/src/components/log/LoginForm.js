import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const login = (e) => {
        e.preventDefault();
        //const emailError = document.getElementById('.email.error');
        //const passwordError = document.querySelector('.password.error');

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/users/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },    
        })
            .then(res => {
                console.log(res.data);
                window.location = '/';
                
            })
            .catch(error => { 
                console.log(error);

                /*if(res.data.errors) {
                emailError.innerHTML = `${<p>Email inconnu</p>}`;
                    passwordError.innerHTML = `${<p>Email inconnu</p>}`;
                }*/

            });

    }


    
    return (
        <form action="" onSubmit={login} id="login-form">
            <label htmlFor='email'>Email</label><br />
            <input 
                type="text" 
                name="email" 
                id="email" 
                onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
            <div className='email error'></div> <br />
            <label htmlFor='password'>Mot de passe</label> <br />
            <input 
                type="password" 
                name="password" 
                id="password" 
                onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
            <div className='password error'></div> <br />
            <input type="submit" value="Se connecter" />
        </form>
    );
};

export default LoginForm;