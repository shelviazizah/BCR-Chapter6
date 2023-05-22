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
import LandingPageNoBtn from './component/landingPageNoBtn';
import OurServices from './component/ourServices';
import WhyUs from './component/whyUs';
import BeforeFaq from './component/beforeFaq';
import FAQSection from './component/faq';
import Testimonial from './component/testimonial';
import ListCars from './component/listCars';
import Footer from './component/footer';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';



const cars = ReactDOM.createRoot(document.getElementById('cars'));
cars.render(
  <Provider store={store}>
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
      <Route path="searchcar" element={
        <React.StrictMode>
        <Navbar />
        <LandingPageNoBtn />
        <ListCars />
        <Footer />
        </React.StrictMode>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
