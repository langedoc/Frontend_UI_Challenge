import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CustomButton from "./CustomButton";

describe ('CustomButton component', () => {
    it('renders CustomButton', () => {
        render(<CustomButton>Click me</CustomButton>);
        expect(screen.getByRole('button')).toBeInTheDocument();
      });

    it('renders children', () => {
        render(<CustomButton>Click me</CustomButton>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('call onClick when clicked', () => {
        const mockOnClick = jest.fn();
        render(<CustomButton onClick={mockOnClick}>Click me</CustomButton>);

        fireEvent.click(screen.getByRole('button'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('has class name correctly', () => {
        render(<CustomButton>Click me</CustomButton>);
        expect(screen.getByRole('button')).toHaveClass('custom-button');
    })
});