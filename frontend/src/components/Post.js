import React from 'react';

const Post = () => {
    return (
        <article className="post">
            <div className="location-post">
                <div></div>
                <div></div>    
            </div>    
            <div className="info-post">

            </div>
            <div className="media">

            </div>
            <div className="counter-like">
                <i class="fas fa-heart"></i>
            </div>
            <div className="share">
                <a href="#">
                    <i class="far fa-comment">Commentaires</i>
                </a>
                <a href="#">
                    <i class="far fa-heart">Likes</i>
                </a>
                <a href="#">
                    <i class="far fa-share-square">partager</i>
                </a>
            </div>        
        </article>
    );
};

export default Post;