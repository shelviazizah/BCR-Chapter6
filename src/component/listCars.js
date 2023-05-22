import '../assets/css/style.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredCars } from '../features/cars/carsSlice';
import image1 from '../assets/images/car01.min.jpg';


const ListCars = () => {
  const filteredCars = useSelector(state => state.cars.filteredCars);

  const Url = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json';
  const [cars, setCars] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [capacity, setCapacity] = useState('');

  const formatDate = (dateStr) => {
    const newDateTime = new Date(dateStr);
    const epochTime = newDateTime.getTime();
    return epochTime;
  };

  const handleFindCar = ()=>{
    const newDateTime = new Date(`${selectedDate} ${selectedTime}`);
    const epochTime = newDateTime.getTime();
    
    const filterResult = cars.filter((i) => i.capacity >= capacity && formatDate(i.availableAt) >= epochTime );
    dispatch(updateFilteredCars(filterResult));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  const dispatch = useDispatch();

  const getDataCars = async () => {
    const response = await fetch(Url);
    const dataCar = await response.json();
    setCars(dataCar);
  };
  
  useEffect (() => {
    getDataCars();

    fetch(Url).then(response => response.json()).then(data => { setCars(data); dispatch(updateFilteredCars(data));});
  }, [dispatch]);

  return (
    <div>
      <div className="card w-75 container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-lg-evenly">
            <div className="form-group">
              <label className="pb-1" htmlFor="driver-type">
                Tipe Driver
              </label>
              <select
                className="form-select font-14"
                id="driver-type"
                name="driver-type"
              >
                <option className="font-14" value="">
                  Pilih tipe driver
                </option>
                <option className="font-14" value="dengan-sopir">
                  Dengan sopir
                </option>
                <option className="font-14" value="tanpa-sopir">
                  Tanpa sopir (lepas kunci)
                </option>
              </select>
            </div>
            <div className="form-group">
              <label className="pb-1" htmlFor="inputDate">
                Tanggal
              </label>
              <div className="input-group">
                <input
                  type="date"
                  id="inputDate"
                  className="form-control font-14"
                  placeholder="Tanggal"
                  aria-label="Tanggal"
                  aria-describedby="basic-addon2"
                  value={selectedDate}
                  onChange={(i) => setSelectedDate(i.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="pb-1" htmlFor="inputTime">
                Waktu Jemput/Ambil
              </label>
              <div className="input-group">
                <select
                  className="form-select font-14"
                  id="inputTime"
                  name="inputTime"
                  value={selectedTime}
                  onChange={(i) => setSelectedTime(i.target.value)}
                >
                  <option className="font-14" value="0">Pilih waktu</option>
                  <option className="font-14" value="01:00">01:00</option>
                  <option className="font-14" value="02:00">02:00</option>
                  <option className="font-14" value="03:00">03:00</option>
                  <option className="font-14" value="04:00">04:00</option>
                  <option className="font-14" value="05:00">05:00</option>
                  <option className="font-14" value="06:00">06:00</option>
                  <option className="font-14" value="07:00">07:00</option>
                  <option className="font-14" value="08:00">08:00</option>
                  <option className="font-14" value="09:00">09:00</option>
                  <option className="font-14" value="10:00">10:00</option>
                  <option className="font-14" value="11:00">11:00</option>
                  <option className="font-14" value="12:00">12:00</option>
                  <option className="font-14" value="13:00">13:00</option>
                  <option className="font-14" value="14:00">14:00</option>
                  <option className="font-14" value="15:00">15:00</option>
                  <option className="font-14" value="16:00">16:00</option>
                  <option className="font-14" value="17:00">17:00</option>
                  <option className="font-14" value="18:00">18:00</option>
                  <option className="font-14" value="19:00">19:00</option>
                  <option className="font-14" value="20:00">20:00</option>
                  <option className="font-14" value="21:00">21:00</option>
                  <option className="font-14" value="22:00">22:00</option>
                  <option className="font-14" value="23:00">23:00</option>
                  <option className="font-14" value="24:00">24:00</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="pb-1" htmlFor="inputCapacity">
                Jumlah Penumpang (Optional)
              </label>
              <div className="input-group">
                <input
                  type="text"
                  id="inputCapacity"
                  className="form-control font-14"
                  placeholder="Jumlah Penumpang"
                  aria-label="Jumlah Penumpang"
                  aria-describedby="basic-addon2"
                  value={capacity}
                  onChange={(i) => setCapacity(i.target.value)}
                />
                <span className="input-group-text bg-white" id="basic-addon2">
                  <i className="fa fa-user-friends"></i>
                </span>
              </div>
            </div>
            <div className="align-center search_car">
              <span>
                <button className="btn btn-success px-3" type="submit" onClick={handleFindCar}>
                  Cari Mobil
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>


      <div className='container-global'>
        <div id="cars-container">
          {filteredCars.map((car) => 
            <div key={car.id} className="col-lg-4 col-md-4 col-sm-12 mx-0">
              <div className="card mx-2 my-2 g-0" style={{ width: '18.4rem', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)' }}>
                <img src={image1} className="card-img-top img-fluid" alt={car.manufacture} style={{ height: '195px', borderRadius: '3px', objectFit: 'cover' }} />
                <div className="card-body" style={{ fontSize: '14px' }}>
                  <p className="card-title">{car.manufacture} {car.model}</p>
                  <p className="fw-bold">{car.rentPerDay} / hari</p>
                  <p className="card-text" style={{ height: '90px' }}>{car.description}</p>
                  <div className="my-2"><i className="bi bi-people me-2"></i>{car.capacity} Orang</div>
                  <div className="my-2"><i className="bi bi-gear me-2"></i>{car.transmission}</div>
                  <div className="my-2"><i className="bi bi-calendar4 me-2"></i>Tersedia {car.availableAt}</div>
                  <a href="a" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style={{ fontSize: '14px' }}>Pilih Mobil</a>
                </div>
              </div>
            </div>
          )};
        </div>
      </div>
    </div>
  );
};

export default ListCars;
