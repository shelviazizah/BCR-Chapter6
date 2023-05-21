import React from "react";
import '../assets/css/style.css';
import whyUs1 from '../assets/images/img_whyus_1.png';
import whyUs2 from '../assets/images/img_whyus_2.png';
import whyUs3 from '../assets/images/img_whyus_3.png';
import whyUs4 from '../assets/images/img_whyus_4.png';

function WhyUs() {
    return (
        <section id="why-us" className="container-global section">
            <h3 className="title-why-us">Why Us?</h3>
            <p className="title-why-us">Mengapa harus pilih Binar Car Rental?</p>
            <div className="row">
                <div className="col-md">
                    <div className="card mb-3">
                        <div className="card-body">
                            <img src={whyUs1} id="why-us-img" alt="Why Us" />
                            <h5 className="card-title mt-3">Mobil Lengkap</h5>
                            <p className="card-text">
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3">
                        <div className="card-body">
                            <img src={whyUs2} id="why-us-img" alt="Why Us" />
                            <h5 className="card-title mt-3">Harga Murah</h5>
                            <p className="card-text">
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3">
                        <div className="card-body">
                            <img src={whyUs3} id="why-us-img" alt="Why Us" />
                            <h5 className="card-title mt-3">Layanan 24 Jam</h5>
                            <p className="card-text">
                                Siap melayani kebutuhan Anda selama 24 jam nonstop.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3">
                        <div className="card-body">
                            <img src={whyUs4} id="why-us-img" alt="Why Us" />
                            <h5 className="card-title mt-3">Sopir Professional</h5>
                            <p className="card-text">
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;





