import React, { createContext, useState, useContext, useEffect } from "react";
import * as ApiClient from "../services/api";

const MovieContext = createContext(null);

export const MovieProvider = ({children}) => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    
    useEffect (() => {
        const fetchMovies = async () => {
            try {
                const [popular, topRated, upcoming] = await Promise.all([
                    ApiClient.getPopularMovies(),
                    ApiClient.getTopRatedMovies(),
                    ApiClient.getUpcomingMovies()
                ]);

                setPopularMovies(popular.results);
                setTopRatedMovies(topRated.results);
                setUpcomingMovies(upcoming.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <MovieContext.Provider value={{popularMovies, topRatedMovies, upcomingMovies}}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovieContext() {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("useMoviesContext should be used within the MovieProvider");
    }
    return context;
}