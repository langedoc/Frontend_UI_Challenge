import React from 'react';
import {Link} from 'react-router-dom';
import placeholder from '../../assets/coming_soon.png';
import './ItemCard.scss';

export default function ItemCard({movie}) {
    return (
        <div className="item-card">
            <Link to="/detailed" state={{movie: movie}}>
                <img
                    src={
                        movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder
                    }
                    alt="movie poster"
                />
            </Link>
            <h3>{movie.title}</h3>
        </div>
    );
};