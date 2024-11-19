import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../../App";

describe('App Router', () => {
    it('should render Home page for root path', () => {
        render(<App />, { route: '/' });
    });

    it('should render Detailed page for /detailed path', () => {
        render(<App />, { route: '/detailed' });
    });
});