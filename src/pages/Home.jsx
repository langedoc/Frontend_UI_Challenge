import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import ItemCard from '../components/ItemCard/ItemCard';

export default function Home() {
    const {popularMovies} = useMovieContext();

    return (
        <div>
            <h1>Popular Movies</h1>
            <div>
                {popularMovies && popularMovies.map((movie) => (
                    <ItemCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}