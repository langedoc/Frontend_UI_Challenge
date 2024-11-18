import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import { useMovieContext } from '../../contexts/MovieContext';

export default function Header() {

    const {setIsWishlistOpen} = useMovieContext();

    return (
        <header className="header">
            <Link to="/" onClick={()=>setIsWishlistOpen(false)}>
                <h1>MyMovie</h1>
            </Link>
            <button onClick={()=>setIsWishlistOpen(true)}>MY WISHLIST</button>
        </header>
    );
}