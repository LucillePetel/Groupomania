import React from 'react';

const Login = () => {
    return (
        <section>
            <h2>Connectez-vous</h2>
            <form>
                <label htmlFor="email">Adresse email</label> <br />
                <input type="email"></input><br />
                <label htmlFor="password">Mot de passe</label><br />
                <input type="password"></input><br />
            </form>
        </section>
    );
};

export default Login;