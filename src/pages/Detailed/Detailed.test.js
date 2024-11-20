import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Detailed from './Detailed';
import { MovieContext } from '../../contexts/MovieContext';
import { mocks } from '../../tests/mocks';

// Mock the useLocation hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        state: { movie: mocks.movie }
    })
}));

const MockDetailed = ({ onWishlistChange, initialWishlist = [] } = {}) => {
    const [wishlist, setWishlist] = useState(initialWishlist);
    
    const handleSetWishlist = (newWishlist) => {
        setWishlist(newWishlist);
        onWishlistChange?.(newWishlist);
    };
    
    return (
        <MovieContext.Provider value={{ 
            wishlist, 
            setWishlist: handleSetWishlist,
            listType: "popular" 
        }}>
            <Detailed />
        </MovieContext.Provider>
    );
};

describe('Detailed page', () => {
    it('renders Detailed page', () => {
        render(<MockDetailed />);
        expect(screen.getByTestId('detailed-page')).toBeInTheDocument();
    });

    it('renders movie title, movie image and movie description', () => {
        render(<MockDetailed />);
        expect(screen.getByText(mocks.movie.title)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute(
            'src',
            expect.stringContaining(mocks.movie.poster_path)
        );
        expect(screen.getByText(mocks.movie.overview)).toBeInTheDocument();
    });

    it('renders Add to Wishlist button and toggles to Remove from Wishlist when clicked', () => {
        render(<MockDetailed />);
        
        // First shows "Add to Wishlist"
        const addButton = screen.getByText('Add to Wishlist');
        expect(addButton).toBeInTheDocument();
        
        // Click the button
        fireEvent.click(addButton);
        
        // On click shows "Remove from Wishlist"
        expect(screen.getByText('Remove from Wishlist')).toBeInTheDocument();
    });

    it('adds movie to wishlist when Add to Wishlist button is clicked', () => {
        let testWishlist = [];
        render(<MockDetailed onWishlistChange={(newWishlist) => {
            testWishlist = newWishlist;
        }} />);
        
        expect(testWishlist.length).toBe(0);
        fireEvent.click(screen.getByText('Add to Wishlist'));
        expect(testWishlist.length).toBe(1);
        expect(testWishlist[0]).toEqual(mocks.movie);
    });

    it('removes movie from wishlist when Remove from Wishlist button is clicked', () => {
        let testWishlist = [mocks.movie];
        render(
            <MockDetailed 
                initialWishlist={[mocks.movie]}
                onWishlistChange={(newWishlist) => {
                    testWishlist = newWishlist;
                }} 
            />
        );
        
        expect(testWishlist.length).toBe(1);
        fireEvent.click(screen.getByText('Remove from Wishlist'));
        expect(testWishlist.length).toBe(0);
        expect(testWishlist[0]).not.toEqual(mocks.movie);
    });
});
