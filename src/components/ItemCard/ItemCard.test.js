import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from './ItemCard';
import { CustomMovieProvider, mockSetListType } from '../../tests/mocks/mockProviders'; 
import { mocks } from '../../tests/mocks';

// Mock the API client
jest.mock('../../services/api', () => ({
    getPopularMovies: jest.fn(() => Promise.resolve({ results: [] })),
    getTopRatedMovies: jest.fn(() => Promise.resolve({ results: [] })),
    getUpcomingMovies: jest.fn(() => Promise.resolve({ results: [] })),
}));


const MockItemCard = () => {
    return (
        <BrowserRouter>
            <CustomMovieProvider>
                <ItemCard 
                    movie={mocks.movie}
                    listType="popular"
                />
            </CustomMovieProvider>
        </BrowserRouter>
    );
};

describe('ItemCard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders ItemCard with movie title and image', async () => {
        render(<MockItemCard />);
        
        await waitFor(() => {
            expect(screen.getByTestId('item-card')).toBeInTheDocument();
            expect(screen.getByText(mocks.movie.title)).toBeInTheDocument();
            expect(screen.getByRole('img')).toHaveAttribute(
                'src',
                expect.stringContaining(mocks.movie.poster_path)
            );
        });
    });

    it('navigates to Detailed page clicking on ItemCard image and setListType', async () => {
        render(<MockItemCard />);
        
        const link = screen.getByRole('link');
        fireEvent.click(link);
        
        await waitFor(() => {
            expect(mockSetListType).toHaveBeenCalledWith('popular');
        });
    });
});