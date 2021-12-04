import React, { useState } from 'react';
import axios from 'axios'


const SignUp = () => {
    return (
        <section>
            <form>
                <label htmlFor="lastname">Nom</label><br />
                <input type="text"></input><br />
                <label htmlFor="firstname">Prenom</label><br />
                <input type="text"></input><br />
                <label htmlFor="email">Adresse email</label><br />
                <input type="email"></input><br />
                <label htmlFor="password">Mot de passe</label><br />
                <input type="password"></input><br />
                <input type="submit" value="S'inscrire'" />
            </form>
        </section>
    );
};
export default SignUp;

