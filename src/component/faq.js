import React from 'react';
import '../assets/css/style.css';

const FAQSection = () => {
  return (
    <section id="faq" className="container-global">
      <div className="row">
            <div className="col-sm-5">
                <h3 className="align-left to-right">Frequently Asked Question</h3>
                <p className="to-right">Beberapa pertanyaan yang sering ditanyakan terkait Binar Car Rental</p>
            </div>
            <div className="col-sm-7">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item border">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Apa saja syarat yang dibutuhkan?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                    <code>.accordion-flush</code> class. This is the first item's accordion body.
                    </div>
                </div>
                </div>

                <div className="accordion-item border">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                    <code>.accordion-flush</code> class. This is the first item's accordion body.
                    </div>
                </div>
                </div>

                <div className="accordion-item border">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                    <code>.accordion-flush</code> class. This is the first item's accordion body.
                    </div>
                </div>
                </div>

                <div className="accordion-item border">
                <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Apakah ada biaya antar-jemput?
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                    <code>.accordion-flush</code> class. This is the first item's accordion body.
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )}

export default FAQSection;
