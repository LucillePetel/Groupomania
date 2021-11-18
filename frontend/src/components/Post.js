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
                {/* eslint-disable-next-line*/}
                <a href="#">
                    <i class="far fa-comment"> Commentaires</i>
                </a>
                {/* eslint-disable-next-line*/}
                <a href="#">
                    <i class="far fa-heart"> Likes</i>
                </a>
                {/* eslint-disable-next-line*/}
                <a href="#">
                    <i class="far fa-share-square"> Partager</i>
                </a>
            </div>        
        </article>
    );
};

export default Post;