import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import { MovieProvider } from '../../contexts/MovieContext';

// Mock the api service
jest.mock('../../services/api', () => ({
    getPopularMovies: jest.fn(() => Promise.resolve({ results: [] }))
}));

describe('RootLayout', () => {
    let mockSetIsWishlistOpen;

    beforeEach(() => {
        mockSetIsWishlistOpen = jest.fn();
        // Mock the MovieContext for each test
        jest.spyOn(require('../../contexts/MovieContext'), 'useMovieContext')
            .mockImplementation(() => ({
                isWishlistOpen: false,
                setIsWishlistOpen: mockSetIsWishlistOpen,
                movies: [],
                setMovies: jest.fn(),
                wishlist: [],
                setWishlist: jest.fn()
            }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const MockRootLayout = () => {
        return (
            <BrowserRouter>
                <MovieProvider>
                    <RootLayout />
                </MovieProvider>
            </BrowserRouter>
        );
    };

    it('renders without crashing', () => {
        render(<MockRootLayout />);
    });

    it('renders Header component', () => {
        render(<MockRootLayout />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('renders MyMovie text in header and link to home page', () => {
        render(<MockRootLayout />);
        expect(screen.getByText('MyMovie')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'MyMovie' })).toHaveAttribute('href', '/');
    });

    it('renders MY WISHLIST button in header', () => {
        render(<MockRootLayout />);
        expect(screen.getByText('MY WISHLIST')).toBeInTheDocument();
    });

    it('opens wishlist overlay when MY WISHLIST button is clicked', () => {
        render(<MockRootLayout />);
        fireEvent.click(screen.getByText('MY WISHLIST'));
        expect(mockSetIsWishlistOpen).toHaveBeenCalledWith(true);
    });

    it('closes wishlist when clicking home link', () => {
        render(<MockRootLayout />);
        fireEvent.click(screen.getByText('MyMovie'));
        expect(mockSetIsWishlistOpen).toHaveBeenCalledWith(false);
    });

    it('shows WishlistOverlay when isWishlistOpen is true', () => {
        // Override the default mock for this specific test
        jest.spyOn(require('../../contexts/MovieContext'), 'useMovieContext')
            .mockImplementation(() => ({
                isWishlistOpen: true,
                setIsWishlistOpen: mockSetIsWishlistOpen,
                movies: [],
                setMovies: jest.fn(),
                wishlist: [],
                setWishlist: jest.fn()
            }));

        render(<MockRootLayout />);
        expect(screen.getByTestId('wishlist-overlay')).toBeInTheDocument();
    });

    it('does not show WishlistOverlay when isWishlistOpen is false', () => {
        render(<MockRootLayout />);
        expect(screen.queryByTestId('wishlist-overlay')).not.toBeInTheDocument();
    });
});