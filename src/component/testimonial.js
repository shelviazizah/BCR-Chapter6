import React, { useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import '../assets/css/style.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testi1 from "../assets/images/img_testimoni_1.png";
import testi2 from "../assets/images/img_testimoni_2.png";
import rating from "../assets/images/img_star.png";

const responsiveSettings = {
    0: {
      items: 1,
    },
    600: {
      items: 2.5,
      merge: true,
    },
  };

const Testimonial = () => {
    const carouselRef = useRef(null);
  
    useEffect(() => {
      const carouselElement = carouselRef.current;
  
      if (carouselElement) {
        const options = {
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          navText: ["<", ">"],
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 2.5,
              merge: true,
            },
          },
        };
  
        // Initialize the carousel
        OwlCarousel(carouselElement, options);
      }
    }, []);

  return (
    <section id="testimonial" className="container-global">
      <h3 className="align-center">Testimonial</h3>
      <p className="align-center">Berbagai review positif dari para pelanggan kami</p>
      <div className="wrapper">
        <OwlCarousel className="owl-carousel owl-theme img-carousel"
          loop
          margin={10}
          nav
          dots={false}
          navText={["<", ">"]}
          responsive={responsiveSettings}>

          <div className="items">
            <div className="card carousel border-0">
              <div className="card-body border-radius-5 bg-grey">
                <div className="row pt-4 pb-5">
                  <div className="col-sm-2">
                    <img className="img-testi" src={testi1} alt="" />
                  </div>
                  <div className="col-sm-10">
                    <img src={rating} className="img-star" alt="" />
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet”
                    </p>
                    <p className="font-weight-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="card carousel border-0">
              <div className="card-body border-radius-5 bg-grey">
                <div className="row pt-4 pb-5">
                  <div className="col-sm-2">
                    <img className="img-testi" src={testi2} alt="" />
                  </div>
                  <div className="col-sm-10">
                    <img src={rating} className="img-star" alt="" />
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet”
                    </p>
                    <p className="font-weight-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="card carousel border-0">
              <div className="card-body border-radius-5 bg-grey">
                <div className="row pt-4 pb-5">
                  <div className="col-sm-2">
                    <img className="img-testi" src={testi1} alt="" />
                  </div>
                  <div className="col-sm-10">
                    <img src={rating} className="img-star" alt="" />
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet”
                    </p>
                    <p className="font-weight-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonial;
