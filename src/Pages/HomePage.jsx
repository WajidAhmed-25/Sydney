import React from 'react'
import MainSlider from '../Components/Main_Slider/Main_Slider';
import CardsModified from '../Components/Cards_Slider/Card2';
import { HeroHeader } from '../Components/Hero_Section/Hero';
import BelowHeroSection from '../Components/Below_Hero_Section/Below_Hero_Section';
import ActiveSlider from '../Components/Product_Slider/Product_Slider';
import Devider from '../Components/Divider/Divider';
import Badge from '../Components/NDIS Badge/ndi_badge';
import Badge2 from '../Components/NDIS Badge/badge2';
import MainSlider2 from '../Components/Main_Slider/Main_Slider2';
import ImageSlider from '../Components/Main_Slider/Main_Slider2';
import Below_Hero_2 from '../Components/Below_Hero_Section/Below_Hero_2';

const HomePage = () => {
  return (
    <div >
     
   
       
    <ImageSlider/>
        <hr />
        <Below_Hero_2/>
        <CardsModified />
        <HeroHeader />
        <BelowHeroSection />
       <Devider/>
        <ActiveSlider /> 
    </div>
  )
}

export default HomePage