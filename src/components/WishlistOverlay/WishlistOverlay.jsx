import React from 'react';
import './WishlistOverlay.scss';
import { useMovieContext } from '../../contexts/MovieContext';
import ItemCard from '../ItemCard/ItemCard';
import { FaWindowClose } from "react-icons/fa";

export default function WishlistOverlay() {

    const { wishlist, setIsWishlistOpen } = useMovieContext();
    
    return (
        <div className="wishlist-overlay">
            <div className="wishlist-overlay_header">
                <h2>MY WISHLIST</h2>
                <FaWindowClose onClick={()=>setIsWishlistOpen(false)} />
            </div>
            <div className="wishlist-overlay_items">
                {wishlist.length===0 ? (
                    <p>You have no items in yourwishlist yet...</p>
                ) : (
                    wishlist.map((movie) => (
                        <ItemCard key={movie.id} movie={movie} />
                    ))
                )}
            </div>
        </div>
    );
};