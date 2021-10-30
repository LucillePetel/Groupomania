import React from 'react';

const SignUp = () => {
    return (
        <section>
            <h2>Inscrivez-vous</h2>
            <form>
                <label htmlFor="name">Nom</label><br />
                <input type="text"></input><br />
                <label htmlFor="first-name">Prenom</label><br />
                <input type="text"></input><br />
                <label htmlFor="email">Adresse email</label><br />
                <input type="email"></input><br />
                <label htmlFor="password">Mot de passe</label><br />
                <input type="password"></input>
            </form>
        </section>
    );
};

export default SignUp;