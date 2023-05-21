import React from 'react';
import image01 from '../images/car01.min.jpg';

function Car({
  id,
  plate,
  manufacture,
  model,
  image,
  rentPerDay,
  capacity,
  description,
  transmission,
  available,
  type,
  year,
  options,
  specs,
  availableAt,
}) {
    // const getImage = (id) => {
    //     // Ganti "car" dengan nama folder tempat gambar disimpan
    //     return require(`../images/car${id}.min.jpg`).default;
    // };
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 mx-0">
      <div className="card mx-2 my-2 g-0" style={{ width: '18.4rem', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)' }}>
        <img src={image01} className="card-img-top img-fluid" alt={manufacture} style={{ height: '195px', borderRadius: '3px', objectFit: 'cover' }} />
        <div className="card-body" style={{ fontSize: '14px' }}>
          <p className="card-title">{manufacture} {model}</p>
          <p className="fw-bold">{rentPerDay} / hari</p>
          <p className="card-text" style={{ height: '90px' }}>{description}</p>
          <div className="my-2"><i className="bi bi-people me-2"></i>{capacity} Orang</div>
          <div className="my-2"><i className="bi bi-gear me-2"></i>{transmission}</div>
          <div className="my-2"><i className="bi bi-calendar4 me-2"></i>Tahun {year}</div>
          <a href="a" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style={{ fontSize: '14px' }}>Pilih Mobil</a>
        </div>
      </div>
    </div>
  );
}

export default Car;
