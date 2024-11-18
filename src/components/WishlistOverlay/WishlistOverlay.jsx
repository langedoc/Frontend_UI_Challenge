import React from 'react';
import './WishlistOverlay.scss';
import { useMovieContext } from '../../contexts/MovieContext';

export default function WishlistOverlay() {

    const { wishlist } = useMovieContext();
    console.log( wishlist);
    return (
        <div className="wishlist-overlay">
            <h3>Wishlist</h3>
        </div>
    );
};