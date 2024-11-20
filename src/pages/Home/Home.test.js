import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { MovieContext } from '../../contexts/MovieContext';

import popularMovies from '../../tests/mocks/popularMoviesData';
import upcomingMovies from '../../tests/mocks/upcomingMoviesData';
import topRatedMovies from '../../tests/mocks/topRatedMoviesData';

const MockHome = () => (
    <MovieContext.Provider value={{ popularMovies, upcomingMovies, topRatedMovies }}>
        <Home />
    </MovieContext.Provider>
);

describe('Home page', () => {
    it('renders Home page, three ItemList components and their titles', () => {
        render(<MockHome />);
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
        
        const itemLists = screen.getAllByTestId('item-list');
        expect(itemLists).toHaveLength(3);

        expect(screen.getByText('Popular Movies')).toBeInTheDocument();
        expect(screen.getByText('Upcoming Movies')).toBeInTheDocument();
        expect(screen.getByText('Top Rated Movies')).toBeInTheDocument();
    });
});