import React from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import ItemList from '../../components/ItemList/ItemList';
import './Home.scss';

export default function Home() {
    const {popularMovies, upcomingMovies, topRatedMovies} = useMovieContext();
    
    return (
        <div className="home" data-testid="home-page">
            <div className="home_carousel">
                <h1>Popular Movies</h1>
                <ItemList movies={popularMovies} listType="popular" />
            </div>
            <div className="home_carousel">
                <h1>Upcoming Movies</h1>
                <ItemList movies={upcomingMovies} listType="upcoming" />
            </div>
            <div className="home_carousel">
                <h1>Top Rated Movies</h1>
                <ItemList movies={topRatedMovies} listType="topRated" />
            </div>
        </div>
    );
}