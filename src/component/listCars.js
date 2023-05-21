import React from 'react';
import CarsData from '../assets/js/cars.json';
import Car from '../assets/js/car';
import { useState } from 'react';
import '../assets/css/style.css';

function ListCars() {
    const [cars, setCars] = useState(CarsData)
  return (
    <div className='container-global'>
        <div id="cars-container">
            {cars.map((car) => (
            <Car key={car.id} {...car} />
            ))}
        </div>
    </div>

  );
}

export default ListCars;
