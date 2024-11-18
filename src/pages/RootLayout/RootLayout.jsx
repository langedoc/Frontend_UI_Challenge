import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../../components/Header/Header';
import WishlistOverlay from '../../components/WishlistOverlay/WishlistOverlay';
import { useMovieContext } from '../../contexts/MovieContext';

export default function RootLayout() {

    const  {isWishlistOpen} = useMovieContext();

    return (
        <>
            <Header />
            <Outlet />
            {isWishlistOpen && <WishlistOverlay />}
        </>
    );
}