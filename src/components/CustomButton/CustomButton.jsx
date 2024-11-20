import React from 'react';
import './CustomButton.scss';

export default function CustomButton ({ children, onClick }) {
    return (
        <button className="custom-button" onClick={onClick} data-testid="custom-button">{children}</button>
    );
}