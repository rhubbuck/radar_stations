import React, { useContext } from 'react';
import StationContext from './StationContext';

function StationGrid() {
    const { item } = useContext(StationContext);

  return (
    <div>StationGrid</div>
  )
}

export default StationGrid