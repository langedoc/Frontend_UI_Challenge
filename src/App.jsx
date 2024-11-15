import React from 'react';
import {MovieProvider} from './contexts/MovieContext';
import Home from './pages/Home/Home';
import './styles/main.scss';

const App = () => {
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
};

export default App;