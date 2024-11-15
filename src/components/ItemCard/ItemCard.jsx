import React from 'react';
import placeholder from '../../assets/coming_soon.png';
import './ItemCard.scss';
export default function ItemCard({movie}) {
    return (
        <div className="item-card">
            <img
                src={
                    movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder
                }
                alt="movie poster"
            />
            <h3>{movie.title}</h3>
        </div>
    );
};