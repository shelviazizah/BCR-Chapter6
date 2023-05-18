import React, { useState } from 'react';

const CarSearchForm = () => {
//   const [driverType, setDriverType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [passengerCount, setPassengerCount] = useState('');

//   const handleDriverTypeChange = (event) => {
//     setDriverType(event.target.value);
//   };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePassengerCountChange = (event) => {
    setPassengerCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan data yang telah diisi
  };

  return (
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
            //   value={driverType}
            //   onChange={handleDriverTypeChange}
            //   required
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
                onChange={handleDateChange}
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
                onChange={handleTimeChange}
                required
              >
                <option className="font-14" value="">Pilih waktu</option>
                <option className="font-14" value="08:00">01:00</option>
                <option className="font-14" value="08:00">02:00</option>
                <option className="font-14" value="08:00">03:00</option>
                <option className="font-14" value="08:00">04:00</option>
                <option className="font-14" value="08:00">05:00</option>
                <option className="font-14" value="08:00">06:00</option>
                <option className="font-14" value="08:00">07:00</option>
                <option className="font-14" value="08:00">08:00</option>
                <option className="font-14" value="08:00">09:00</option>
                <option className="font-14" value="08:00">10:00</option>
                <option className="font-14" value="08:00">11:00</option>
                <option className="font-14" value="08:00">12:00</option>
                <option className="font-14" value="08:00">13:00</option>
                <option className="font-14" value="08:00">14:00</option>
                <option className="font-14" value="08:00">15:00</option>
                <option className="font-14" value="08:00">16:00</option>
                <option className="font-14" value="08:00">17:00</option>
                <option className="font-14" value="08:00">18:00</option>
                <option className="font-14" value="08:00">19:00</option>
                <option className="font-14" value="08:00">20:00</option>
                <option className="font-14" value="08:00">21:00</option>
                <option className="font-14" value="08:00">22:00</option>
                <option className="font-14" value="08:00">23:00</option>
                <option className="font-14" value="08:00">24:00</option>
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
                value={passengerCount}
                onChange={handlePassengerCountChange}
              />
              <span className="input-group-text bg-white" id="basic-addon2">
                <i className="fa fa-user-friends"></i>
              </span>
            </div>
          </div>
          <div className="align-center search_car">
            <span>
              <button className="btn btn-success px-3" type="submit">
                Cari Mobil
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarSearchForm;
