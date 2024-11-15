import React from 'react';
import {MovieProvider} from './contexts/MovieContext';

const App = () => {
  return (
    <MovieProvider>
      <div>Hello World</div>
    </MovieProvider>
  );
};

export default App;