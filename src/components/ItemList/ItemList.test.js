import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from './ItemList';
import { CustomMovieProvider } from '../../tests/mocks/mockProviders';


describe('ItemList', () => {
    it('renders ItemList with correct list type', () => {
        render(<ItemList listType="popular" />, { wrapper: CustomMovieProvider });
        expect(screen.getByTestId('item-list')).toBeInTheDocument();
    });
});