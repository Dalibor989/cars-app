import carService from '../services/CarService';
import React, {useState, useEffect} from "react";

function AppCars() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      const data = await carService.getAllCars();
      
      setCars(data);
    };

    fetchCars();

  }, []);

  return (
    <div>
      <p>Cars:</p>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{car.brand}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppCars;