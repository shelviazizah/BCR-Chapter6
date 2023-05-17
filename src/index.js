import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import Navbar from './component/navbar';
import LandingPage from './component/landingPage';
import OurServices from './component/ourServices';
import WhyUs from './component/whyUs';
import BeforeFaq from './component/beforeFaq';
import FAQSection from './component/faq';
import Testimonial from './component/testimonial';
import Footer from './component/footer';
import reportWebVitals from './reportWebVitals';



const cars = ReactDOM.createRoot(document.getElementById('cars'));
cars.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <React.StrictMode>
        <Navbar />
        <LandingPage />
        <OurServices />
        <WhyUs />
        <Testimonial />
        <BeforeFaq />
        <FAQSection />
        <Footer />
        </React.StrictMode>}/>
    </Routes>
  </BrowserRouter>
);

// const searchCar = ReactDOM.createRoot(document.getElementById('searchCar'));
// searchCar.render(
//   <React.StrictMode>
//     <Navbar />
//     <LandingPage />
//     <Footer />
//   </React.StrictMode>
// );

const searchCar = ReactDOM.createRoot(document.getElementById('searchCar'));
searchCar.render(
  <BrowserRouter>
    <Routes>
      <Route path="searchcar" element={
        <React.StrictMode>
        <Navbar />
        <LandingPage />
        <Footer />
        </React.StrictMode>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
