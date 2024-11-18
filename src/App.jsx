import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {MovieProvider} from './contexts/MovieContext';
import RootLayout from './pages/RootLayout/RootLayout';
import Home from './pages/Home/Home';
import Detailed from './pages/Detailed/Detailed';
import './scss/main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detailed",
        element: <Detailed />,
      },
    ],
  },
]);

const App = () => {
  
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
};

export default App;