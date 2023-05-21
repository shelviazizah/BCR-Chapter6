import React from "react";
import '../assets/css/style.css';
import imgSosmed from '../assets/images/img_sosmed.png';

function Footer() {
    return (
        <section className="container-global pt-5 mt-5 pb-5 mb-5">
            <div className="row">
                <div className="col-sm-3">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-sm-3">
                    <p>Our Services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className="col-sm-3">
                    <p>Connect with us</p>
                    <p>
                        <img src={imgSosmed} alt="" />
                    </p>
                </div>
                <div className="col-sm-3">
                    <p>Copyright Binar 2022</p>
                    <div id="logo"></div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
