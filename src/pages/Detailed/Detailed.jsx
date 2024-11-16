import React from 'react';
import './Detailed.scss';
import { useMovieContext } from '../../contexts/MovieContext';


export default function Detailed() {
    
    const {popularMovies} = useMovieContext();
    const movie = popularMovies?.[0];

    if (!movie) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="detailed">
            <div className="detailed_main">
                <div className="detailed_main_poster">
                    <img
                        src={
                            movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder
                        }
                        alt="movie poster"
                    />
                </div>
                <div className="detailed_main_info">
                    <button>Add to Wishlist</button>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className="detailed_additional">
                <p><strong>Language:</strong><br/> {movie.original_language.toUpperCase()}</p>
                <p><strong>Release Date:</strong><br/> {movie.release_date}</p>
                <p><strong>Rating:</strong><br/> {movie.vote_average} ({movie.vote_count} votes)</p>
            </div>
        </div>
    );
};