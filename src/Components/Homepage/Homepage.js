import React from "react";
import Navbar from "../Share/Navbar/Navbar";
import Banner from "../Banner/Banner";
import KnowaboutHospital from "../KnowaboutHospitals/KnowaboutHospital";
import Bookappointment from "../Bookapointment/Bookappointment";
import Ourclients from "../Ourclients/Ourclients";
import Telemedicine from "../Telemedicine/Telemedicine";
import Helppackage from "../Helopackage/Helppackage";
import Ourpartner from "../Ourpartner/Ourpartner";
import Callus from "../Callus/Callus";
import Supportservices from "../SupportServices/Supportservices";
import AboutHospitals from "../AboutHospital/AboutHospitals";
import Phermacy from "../Phermacysection/Phermacy";
import Tabs from "../Tabs/Tabs";
import Tabtwo from "../TabTwo/Tabtwo";
import Tabthree from "../Tabthree/Tabthree";
import Modal from "../Banner/Modal";
import SecontBanner from "../Testbanner/SecontBanner";
import Carousel from "../MobileSlider/Carousel";
import CarouselTabTwoMobile from "../TabTwo/CarouselTabTwoMobile";
import HelpPackageSlider from "../Helopackage/HelpPackageSlider";
import Footer from "../Share/Footer/Footer";
import WelcomeTomedService from "../Welcometomed/WelcomeTomedService";
import Whatwedo from "../WhatWedo/Whatwedo";
import ContactUs from "../Contactus/ContactUs";
import HomepagebloodDonor from "../HomepageBlooddonor/HomepagebloodDonor";
const Homepage = () => {
  return (
    <div className="">
      <SecontBanner />
      {/* <AboutHospitals/> */}
    
      {/* <KnowaboutHospital /> */}
      {/* <Tabs /> */}
      <WelcomeTomedService />
      <Whatwedo />
      <Carousel />
      <Bookappointment />
      <Tabtwo />
      {/* <CarouselTabTwoMobile /> */}
      {/* <Ourclients /> */}
      {/* <Supportservices /> */}
      {/* <Telemedicine /> */}
      {/* <Helppackage /> */}
      {/* <HelpPackageSlider /> */}
      <HomepagebloodDonor />
      <Tabthree />
      <Ourpartner />
      <ContactUs />
      {/* <Callus /> */}
    </div>
  );
};

export default Homepage;
