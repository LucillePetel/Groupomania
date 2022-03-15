import React from 'react';

const PublishPost = () => {
    return (
        <div className='publish-post'>
            <div className='publish-content'>
                <img src='../img/avatar.png' alt="Icon de l'utilisateur" className='user-picture'/>
                <div>
                    <input className='title-publish'></input>
                    <textarea className='text-publish'>

                    </textarea>
                </div>
            </div>
            <ul>
                <li className='add-picture'>Ajouter un fichier</li>
                <li className='publish-button'>Publier</li>
            </ul>
        </div>
    );
};

export default PublishPost;