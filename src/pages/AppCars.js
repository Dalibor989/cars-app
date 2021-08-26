import carService from '../services/CarService';
import React, {useState, useEffect} from "react";
import SingleCar from '../components/SingleCar';

function AppCars() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      const data = await carService.getAllCars();
      
      setCars(data);
    };

    fetchCars();

  }, []);

  const handleDelete = async (carId) => {
    const isDeleted = await carService.delete(carId);

    if(isDeleted) {
      setCars(cars.filter(({ id }) => id !== carId))
    }
  }

  return (
    <div>
      <p>Cars:</p>
      <ul>
        {cars.map((car) => (
          <SingleCar
            key={car.id}
            id={car.id}
            brand={car.brand}
            model={car.model}
            year={car.year}
            maxSpeed={car.maxSpeed}
            isAutomatic={car.isAutomatic}
            engine={car.engine}
            numberOfDoors={car.numberOfDoors}
            deleteCallback={handleDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default AppCars;