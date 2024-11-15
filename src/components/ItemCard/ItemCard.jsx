import React from 'react';
import placeholder from '../../assets/coming_soon.png';

export default function ItemCard({movie}) {
    return (
        <div className="item-card">
            <h3 className="item-card-title">{movie.title}</h3>
            <img
                className="item-card-img" 
                src={
                    movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder
                }
                alt="movie poster"
            />
        </div>
    );
};