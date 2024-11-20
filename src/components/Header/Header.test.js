import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";

// Mock the useMovieContext hook
jest.mock("../../contexts/MovieContext", () => ({
    useMovieContext: () => ({
        setIsWishlistOpen: mockSetIsWishlistOpen
    })
}));

const mockSetIsWishlistOpen = jest.fn();

const MockHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
};

describe('Header', () => {
    beforeEach(() => {
        mockSetIsWishlistOpen.mockClear();
    });
    
    it('renders Header with MyMovie title and Wishlist button', () => {
        render(<MockHeader />);

        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByText('MyMovie')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('MY WISHLIST');
    });

    it('navigates to Home page on clicking MyMovie title    ', () => {
        render(<MockHeader />);

        const logoLink = screen.getByText('MyMovie');
        fireEvent.click(logoLink);
    });

    it('open Wishlist overlay on clicking wishlist button', () => {
        render(<MockHeader />);

        const wishlistButton = screen.getByRole('button', { name: /my wishlist/i });
        fireEvent.click(wishlistButton);

        expect(mockSetIsWishlistOpen).toHaveBeenCalledWith(true);
    });
});