import React from "react";
import '../assets/css/style.css';
import womanImage from '../assets/images/img_woman.png';
import checklistImage from '../assets/images/img_checklist.png';

function OurServices() {
    return (
        <section id="our-services" className="container-global bg-white">
            <div className="row">
                <div className="col-sm-6 bg-white">
                    <img src={womanImage} alt="Woman" id="img-woman" style={{ width: '90%' }} />
                </div>
                <div className="col-sm-6 list-section bg-white">
                    <h3 className="align-left">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul className="list-group">
                        <li className="list-group-item"><img id="checklist" src={checklistImage} alt="checklist" /> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                        <li className="list-group-item"><img id="checklist" src={checklistImage} alt="checklist" /> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                        <li className="list-group-item"><img id="checklist" src={checklistImage} alt="checklist" /> Sewa Mobil Jangka Panjang Bulanan</li>
                        <li className="list-group-item"><img id="checklist" src={checklistImage} alt="checklist" /> Gratis Antar - Jemput Mobil di Bandara</li>
                        <li className="list-group-item"><img id="checklist" src={checklistImage} alt="checklist" /> Layanan Airport Transfer / Drop In Out</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
