import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {MovieProvider} from './contexts/MovieContext';
import Home from './pages/Home/Home';
import Detailed from './pages/Detailed/Detailed';
import './styles/main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detailed",
    element: <Detailed />,
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