import React from 'react';

function SingleCar({
  id,
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  numberOfDoors,
  deleteCallback,
}) {
  return (
    <li>
      <span>Brand: {brand}</span><br/>
      <span>Model: {model}</span><br/>
      <span>Year: {year}</span><br/>
      <span>Max speed: {maxSpeed}</span><br/>
      <span>{isAutomatic ? ' Is autmatic' : ' Is not automatic'} {isAutomatic}</span><br/>
      <span>Number of Doors: {numberOfDoors}</span><br/>
      <button onClick={() => deleteCallback(id)}>Delete</button>
    </li>
  )
}

export default SingleCar;