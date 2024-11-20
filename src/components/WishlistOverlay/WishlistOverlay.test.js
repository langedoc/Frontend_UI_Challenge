import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import WishlistOverlay from './WishlistOverlay';
import { CustomMovieProvider } from '../../tests/mocks/mockProviders';

const MockWishlistOverlay = ({ wishlist = [] }) => {
    return (
        <BrowserRouter>
            <CustomMovieProvider wishlist={wishlist}>
                <WishlistOverlay />
            </CustomMovieProvider>
        </BrowserRouter>
    );
};

describe('WishlistOverlay', () => {
    it('renders WishlistOverlay', () => {
        render(<MockWishlistOverlay />);
        expect(screen.getByTestId('wishlist-overlay')).toBeInTheDocument();
    });

    it('displays empty wishlist message when wishlist is empty', () => {
        render(<MockWishlistOverlay wishlist={[]} />);
        expect(screen.getByText('You have no items in yourwishlist yet...')).toBeInTheDocument();
    });

    it('renders wishlist items when wishlist has movies', () => {
        const mockWishlist = [
            { id: 1, title: 'Test Movie 1' },
            { id: 2, title: 'Test Movie 2' }
        ];
        render(<MockWishlistOverlay wishlist={mockWishlist} />);
        mockWishlist.forEach(movie => {
            expect(screen.getByText(movie.title)).toBeInTheDocument();
        });
    });

    it('close Wishlist overlay on clicking close button', () => {
        render(<MockWishlistOverlay />);
        const closeButton = screen.getByTestId('close-button');
        fireEvent.click(closeButton);
    });
});