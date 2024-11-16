import React from 'react';
import {MovieProvider} from './contexts/MovieContext';
// import Home from './pages/Home/Home';
import Detailed from './pages/Detailed/Detailed';
import './styles/main.scss';

const App = () => {
  
  return (
    <MovieProvider>
      {/* <Home /> */}
      <Detailed/>
    </MovieProvider>
  );
};

export default App;