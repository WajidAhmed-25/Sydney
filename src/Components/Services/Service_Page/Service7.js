import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
export default function Service_Card7(props){


    
    const continents = [
  
'Assistance with daily basic tasks',
'Preparing healthy meals',
'Helping you participate in recreational activities',
'Assistance with communication and paying bills',
'Shopping',
'Helping you with medication'

 ];


    return(
        <>
        <PageIntro page_name="Development of Daily Living and Life Skills"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Development of Daily Living and Life Skills
        </h1>
        <p className="text-sm leading-relaxed md:text-lg">

          </p>
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          Development of Daily Living and Life Skills is a service that encourages personal development, enhances independence and increases opportunities to participate in the community. Individuals can work on learning to use public transport, developing skills for community, and normal day-to-day living activities.


          </p>
        </div>
     
 

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          At Sydney 24/7 Care we can support you to develop the everyday life skills that increase independence and control. We provide resources, tools, support and inspiration to help people with disabilities build everyday skills.
          </p>
        </div>

      

       
 

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">  
          Building everyday skills not only allows you to be more independent, but it also builds a greater sense of confidence and self-esteem. Learning new things is empowering and teaches us how to manage our lives independently with ease!

          </p>
        </div>
  


        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">  
    
People with disabilities are often at a disadvantage in society. They face barriers that most people take for granted, like communication and navigating day to day activities that make it difficult for them to live independently and participate fully in their communities.

          </p>
        </div>


        
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">  
    
          We, at Sydney 24/7 Care, believe everyone should have the opportunity to be involved, included and connected. That’s why we work hard every day to provide opportunities for people living with disabilities through our development of daily living and life skills service.

          </p>
        </div>


        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">  
    
          Let us be there when you need us most – call our friendly team today!
          </p>
        </div>
       
       

     


      </div>




      
      <div className="relative w-full md:w-[40%]">
        <img
          src="https://images.pexels.com/photos/5697255/pexels-photo-5697255.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Person at counter"
          className="object-cover w-full h-64 bg-center md:h-full"
        />
        <Link to="/ContactUs" className="absolute px-10 py-4 text-sm font-semibold bg-white cursor-pointer text-blue-950 hover:border-white hover:border-2 hover:bg-blue-950 hover:text-white bottom-4 left-4 md:bottom-10 md:left-10 md:text-lg">
  Contact Us &#8250;
</Link>
      </div>
    </div>
        </>
    )
}