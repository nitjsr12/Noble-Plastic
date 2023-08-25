import React from 'react';
import Header from '../components/Header';
import Aboutbanner from '../components/About/Aboutbanner';
import Journey from '../components/About/Journey';
import Mission from '../components/About/Mission';
import Team from '../components/About/Team';
import Logoslider from "../components/Logoslider"
import Footer from '../components/Footer';


function aboutUs() {
  return (
    <>
     <Header/>
     <Aboutbanner/>
     <Journey/>
     <Mission/>
     <Team/>
     <Logoslider/>
     <Footer/>
    </>

  )
}

export default aboutUs
