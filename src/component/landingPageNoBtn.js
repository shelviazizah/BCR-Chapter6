import React from "react";
import '../assets/css/style.css';
import imgCar from '../assets/images/img_car.png';

const LandingPageNoBtn = () => {
    return (
        <section id="landing" className="container-global bg-grey">
            <div className="row">
                <div className="col-sm-6 pt-5 description bg-grey">
                    <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                    <p>Selamat Datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
                        siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <div className="col-sm-6">
                    <img src={imgCar} alt="Car" id="img-car" />
                </div>
            </div>
        </section>
    );
};

export default LandingPageNoBtn;