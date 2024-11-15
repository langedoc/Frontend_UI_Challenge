import React from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import ItemList from '../../components/ItemList/ItemList';
import './Home.scss';
export default function Home() {
    const {popularMovies} = useMovieContext();
    const {upcomingMovies} = useMovieContext();
    const {topRatedMovies} = useMovieContext();

    return (
        <div className="home">
            <div className="home_carousel">
                <h1>Popular Movies</h1>
                <ItemList movies={popularMovies} />
            </div>
            <div className="home_carousel">
                <h1>Upcoming Movies</h1>
                <ItemList movies={upcomingMovies} />
            </div>
            <div className="home_carousel">
                <h1>Top Rated Movies</h1>
                <ItemList movies={topRatedMovies} />
            </div>
        </div>
    );
}