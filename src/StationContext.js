import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StationContext = createContext();

export function StationProvider({children}) {

    const [ stations, setStations ] = useState(null);
    const [ loading, setLoading ] = useState(false);
  
    useEffect(() => {
        const fetchApiData = async () => {
            const url = 'https://api.weather.gov/radar/stations';
            
            try {
              setLoading(true);
              const res = await fetch(url);
              const data = await res.json();
              setLoading(false);
              setStations(data);
            } catch (error) {
              console.log(error);
            }
          }
        fetchApiData();
      }, []);

    return (
        <StationContext.Provider value={{item: 1}}>
            {children}
        </StationContext.Provider>
    )
}

export default StationContext;