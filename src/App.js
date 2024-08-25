import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/Contact_Us/Contact';
import HomePage from './Pages/HomePage';
import MyNavbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/About_Us/Aboutus';
import NDISfaq from './Components/NDIS_faq/NDIS_faq';
import Careers from './Components/Careers/Careers';
import Service1 from './Components/Services/Service 1/Service1';
import Badge from './Components/NDIS Badge/ndi_badge';
import Badge2 from './Components/NDIS Badge/badge2';
import My_Demo from './demo';
import ImageSlider from './Components/Main_Slider/Main_Slider2';


function App() {
  return (
    <>
     <Router>
       <div className="App ">
         <MyNavbar />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/ContactUs" element={<ContactUs />} />
           <Route path="/AboutUs" element={<AboutUs />} />
           <Route path="/NDIS" element={<NDISfaq />} />
           <Route path="/Careers" element={<Careers />} />
         </Routes>
         <Footer />
      </div>
     </Router>
  {/* <ImageSlider/> */}

    </>
  );
}

export default App;