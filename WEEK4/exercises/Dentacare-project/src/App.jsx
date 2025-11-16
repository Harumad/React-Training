import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Services2 from './Components/Services2'
import Ourteam from './Components/Ourteam'
import Patients from './Components/Patients'
import Blog from './Components/Blog'
import Faq from './Components/Faq'
import Footer1 from './Components/Footer1'
import Footer2 from './Components/Footer2'
import dentalImage from "./assets/images/dental.jpg";
import ambulanceImage from "./assets/images/ambulance.jpg";
import clockImage from "./assets/images/clock.png";
import calendarImage from "./assets/images/calendar.png";
import whitetee1Image from "./assets/images/whitetee1.jpg";
import whiteteeImage from "./assets/images/whitetee.jpg";
import whit2image from "./assets/Images/whit2.jpg";
import toothimage from "./assets/Images/tooth.jpg";
import doc1image from "./assets/Images/doc1.jpg";
import doc2image from "./assets/Images/doc2.jpg";
import doc3image from "./assets/Images/doc3.jpg";
import doc4image from "./assets/Images/doc4.jpg";
import doc5image from "./assets/Images/doc5.jpg";
import doc6image from "./assets/Images/doc6.jpg";
import doc7image from "./assets/Images/doc7.jpg";










const App = () => {
  return (
    <>
      <Navbar />
      <Hero imgSrc={dentalImage} />
      <Services
        ambulance={ambulanceImage}
        clock={clockImage}
        calendar={calendarImage}
      />
      <Services2
        whitetee1={whitetee1Image}
        whitetee={whiteteeImage}
        whit2={whit2image}
        tooth={toothimage}
      />
      <Ourteam
        doc1={doc1image}
        doc2={doc2image}
        doc3={doc3image}
        doc4={doc4image}
      />
      <Blog doc5={doc5image} doc6={doc6image} doc7={doc7image} />
      <Faq />
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default App