import React from 'react';

const LoginForm = () => {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Logique de traitement du formulaire
    };

    return (
        <form onSubmit={handleSubmit}>
            {<><div>
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input type="text" id="username" name="username" required />
            </div><div>
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required />
                </div><button type="submit">Se connecter</button></>}
        </form>
    );
};

export default LoginForm;
