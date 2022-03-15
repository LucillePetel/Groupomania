import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {

    const [lastName, setLastname] = useState(''); 
    const [firstName, setFirstName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const signUp = (e) => {
        e.preventDefault();
        //const lastNameError = document.querySelector('.lastName.error');
        //const firstNameError = document.querySelector('.firstName.error');
        //const emailError = document.querySelector('.email.error');
        //const passwordError = document.querySelector('.password.error');

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}api/users/signup`,
            withCredentials: true,
            data: {
                lastName,
                firstName,
                email,
                password,
            }
        })
            .then((res) => {
                    console.log(res.data);
                    window.location = '/';
            })
            .catch((err) => { 
                console.log(err);
            });
    }

    return (
        <form action="" onSubmit={signUp} id="signup-form">
            <label htmlFor='lastName'>Nom</label><br />
            <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                onChange={(e) => setLastname(e.target.value)} value={lastName} /> <br />
            <div className='lastName error'></div> <br />
            <label htmlFor='firstName'>Prénom</label><br />
            <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                onChange={(e) => setFirstName(e.target.value)} value={firstName} /> <br />
            <div className='email error'></div> <br />
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
            <input type="submit" value="S'inscrire" />
        </form>
    );
};


export default SignUpForm;