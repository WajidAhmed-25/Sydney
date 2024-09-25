import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/Contact_Us/Contact';
import HomePage from './Pages/HomePage';
import MyNavbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/About_Us/Aboutus';
import NDISfaq from './Components/NDIS_faq/NDIS_faq';
import Careers from './Components/Careers/Careers';

import Badge from './Components/NDIS Badge/ndi_badge';
import Badge2 from './Components/NDIS Badge/badge2';
import My_Demo from './demo';
import ImageSlider from './Components/Main_Slider/Main_Slider2';

import PageIntro from './Components/PageIntro/PageIntro';
import Service_Card1 from './Components/Services/Service_Page/Service'
import Service_Card2 from './Components/Services/Service_Page/Service2';
import Service_Card3 from './Components/Services/Service_Page/Service3';
import Service_Card4 from './Components/Services/Service_Page/Service4';
import Service_Card5 from './Components/Services/Service_Page/Service5';
import Service_Card6 from './Components/Services/Service_Page/Service6';
import Service_Card7 from './Components/Services/Service_Page/Service7';
import Service_Card8 from './Components/Services/Service_Page/Service8';
import Service_Card9 from './Components/Services/Service_Page/Service9';
import Service_Card10 from './Components/Services/Service_Page/Service10';
import Service_Card11 from './Components/Services/Service_Page/Service11';
import Service_Card12 from './Components/Services/Service_Page/Service12';
import Service_Card13 from './Components/Services/Service_Page/Service13';
import Service_Card14 from './Components/Services/Service_Page/Service14';
import Assistance_Btn from './Components/Chat_Button/Assistance';
import Below_Hero_2 from './Components/Below_Hero_Section/Below_Hero_2';



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
           <Route path="/Assist_Life_Stage_Transition" element={<Service_Card1/>}/>
           <Route path="/Assist_Personal_Activities" element={<Service_Card2/>}/>
           <Route path="/Assist_Travel_Transport" element={<Service_Card3/>}/>
           <Route path="/Community_participation" element={<Service_Card4/>}/>
           <Route path="/Daily_Tasks_Shared_Living" element={<Service_Card5/>}/>
           <Route path="/Telehealth" element={<Service_Card6/>}/>
  
           <Route path="/Innovative_Community_Participation" element={<Service_Card8/>}/>
           <Route path="/Household_tasks" element={<Service_Card9/>}/>
           <Route path="/Development_Life_skills" element={<Service_Card10/>}/>
           <Route path="/Social_and_Participating_Community" element={<Service_Card11/>}/>
           <Route path="/Assist_Access/Maintain_Employ" element={<Service_Card12/>}/>
           <Route path="/Assist_Product_Personal_Care/Safety" element={<Service_Card13/>}/>
           <Route path="/Group_Centre_Activities" element={<Service_Card14/>}/>

 
         </Routes>
         <Assistance_Btn/>
         <Footer />
      </div>
     </Router>

     {/* <Below_Hero_2/> */}









    </>
  );
}

export default App;