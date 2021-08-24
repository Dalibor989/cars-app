import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import carService from '../services/CarService';

function AddCars() {
  const history = useHistory();
  
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 1990,
    maxSpeed: 0,
    isAutomatic: false,
    engine: '',
    numberOfDoors: '',
  })

  const addCar = async (e) => {
    e.preventDefault();
    
    const newCar = await carService.addCar(car);
    
    setCar({
      brand: '',
        model: '',
        year: 1990,
        maxSpeed: 0,
        isAutomatic: false,
        engine: '',
        numberOfDoors: '',
    });

    history.push('/cars');
  }

  const handleBrandChange = (e) => {
    setCar({
      ...car,
      brand: e.target.value
    })
  }

  const handleModelChange = (e) => {
    setCar({
      ...car,
      model: e.target.value
    })
  }

  const handleYearChange = (e) => {
    setCar({
      ...car,
      year: e.target.value
    })
  }

  const handleSpeedChange = (e) => {
    setCar({
      ...car,
      maxSpeed: e.target.value
    })
  }

  const handleIsAutomaticChange = (e) => {
    setCar({
      ...car,
      isAutomatic: e.target.value
    })
  }

  const handleEngineChange = (e) => {
    setCar({
      ...car,
      engine: e.target.value
    })
  }

  const handleDoorsChange = (e) => {
    setCar({
      ...car,
      numberOfDoors: e.target.value
    })
  }

  const reset = () => {
    
    setCar({
      brand: '',
      model: '',
      year: 1990,
      maxSpeed: 0,
      isAutomatic: false,
      engine: '',
      numberOfDoors: '',
    });
  }

  const preview = () => {
    alert(`Brand: ${car.brand} \n Model: ${car.model} \n Max speed: ${car.maxSpeed} \n Number of doors: ${car.numberOfDoors} \n Year of production: ${car.year} \n Automatic: ${car.isAutomatic} \n Engine type: ${car.engine} `)
  }

  return (
    <div>
      <form onSubmit={addCar}>
      <label>Brand</label>
      <input required minlength="2" placeholder="brand" name="brand" type="text" value={car.brand} onChange={handleBrandChange}></input>
      <label>Model</label>
      <input required minlength="2" placeholder="model" name="model" type="text" value={car.model} onChange={handleModelChange}></input>
      <label>Max Speed</label>
      <input type="number" placeholder="max 300" name="maxSpeed" min="1" max="300" value={car.maxSpeed} onChange={handleSpeedChange }></input> 
      <label>Number of Doors</label> 
      <input type="number" placeholder="max 7"  name="numberOfDoors" min="1" max="7" value={car.numberOfDoors} onChange={handleDoorsChange}></input>
      <label>Year of car: </label>              
      <select name="year" onChange={handleYearChange}>
        <option value={car.year}>2018</option>
        <option value={car.year}>2017</option>
        <option value={car.year}>2016</option>
        <option value={car.year}>2015</option>
        <option value={car.year}>2014</option>
        <option value={car.year}>2013</option>
        <option value={car.year}>2012</option>
        <option value={car.year}>2011</option>
        <option value={car.year}>2010</option>
        <option value={car.year}>2009</option>
        <option value={car.year}>2008</option>
        <option value={car.year}>2007</option>
        <option value={car.year}>2006</option>
        <option value={car.year}>2005</option>
        <option value={car.year}>2004</option>
        <option value={car.year}>2003</option>
        <option value={car.year}>2002</option>
        <option value={car.year}>2001</option>
        <option value={car.year}>2000</option>
        <option value={car.year}>1999</option>
        <option value={car.year}>1998</option>
        <option value={car.year}>1997</option>
        <option value={car.year}>1996</option>
        <option value={car.year}>1995</option>
        <option value={car.year}>1994</option>
        <option value={car.year}>1993</option>
        <option value={car.year}>1992</option>
        <option value={car.year}>1991</option>
        <option value={car.year}>1990</option>
      </select>
      <div>
          <input type="checkbox" value={true} onChange={handleIsAutomaticChange}></input>
          <label> Is this car automatic?</label>
      </div>
        <div>
          <p>Engine of your car?</p>
          <input type="radio" name="fuel" value='diesel' onChange={handleEngineChange}></input>
          <label>diesel </label>
          <input type="radio" name="fuel" value='petrol' onChange={handleEngineChange}></input>
          <label>petrol </label>
          <input type="radio" name="fuel" value='electric' onChange={handleEngineChange}></input>
          <label>electric </label>
          <input type="radio" name="fuel" value='hybrid' onChange={handleEngineChange}></input>
          <label>hybrid </label>
        </div>
          <button type="button" onClick={preview}>Preview</button>
          <button>Submit</button>
          <button type="button" onClick={reset}>Reset</button>
      </form>
    </div>
  )
}

export default AddCars;