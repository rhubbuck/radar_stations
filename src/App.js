import { useState, useEffect, useContext } from 'react';
import './App.css';
import { StationProvider } from './StationContext';
import StationGrid from './StationGrid';

function App() {

  const [test, setTest] = useState()

  return (
    <StationProvider>
      <div className="App">
        <StationGrid />
      </div>
    </StationProvider>
    
  );
}

export default App;
