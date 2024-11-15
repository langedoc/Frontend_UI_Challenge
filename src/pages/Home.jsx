import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';

export default function Home() {
    const {popularMovies} = useMovieContext();

    return (
        <div>
            <h1>Popular Movies</h1>
            <di>
                {popularMovies && popularMovies.map((movie) => (
                    <h2>{movie.title}</h2>
                ))}
            </di>
        </div>
    );
}