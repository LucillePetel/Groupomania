import React from 'react';

const Connect = () => {
    return (
        <section>
            <form>
                <label for="name">Nom</label>
                <input type="text"></input>
                <label for="first-name">Prenom</label>
                <input type="text"></input>
                <label for="email">Adresse email</label>
                <input type="email"></input>
                <label for="password">Mot de passe</label>
                <input type="password"></input>
            </form>
        </section>
    );
};

export default Connect;