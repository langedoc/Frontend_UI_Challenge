import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import 'whatwg-fetch';

// runs a cleanup after each test case
afterEach(() => {
    cleanup();
});
