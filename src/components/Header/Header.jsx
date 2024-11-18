import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <h1>MyMovie</h1>
            </Link>
            <button>MY WISHLIST</button>
        </header>
    );
}