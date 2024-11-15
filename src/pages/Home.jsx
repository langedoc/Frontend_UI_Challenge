import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import ItemList from '../components/ItemList/ItemList';

export default function Home() {
    const {popularMovies} = useMovieContext();

    return (
        <div>
            <h1>Popular Movies</h1>
            <ItemList movies={popularMovies} />
        </div>
    );
}