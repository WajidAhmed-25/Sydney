import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import work from '../assist.png'

export default function Service_Card6(props){




    return(
        <>
        <PageIntro page_name="Telehealth Appointments"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Telehealth Appointments
        </h1>
        <p className="text-sm leading-relaxed md:text-lg">

          </p>
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>       Sydney 24/7 Care also offers Telehealth services that support clients to receive therapy via video-conferencing technology. This is available for all clients where home visits are not an option or simply if this is a client’s preference.

          </p>
        </div>
     
 

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>      We use an application called Zoom to conduct the Telehealth consult and have had incredible responses to therapy provided in this way. It is important to note that telehealth services do not have any travel fees associated, allowing for more client contact.

          </p>
        </div>

      

       
 

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">  
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>   Are you ready to submit your referral?
          </p>
        </div>
  

       



      </div>




      
      <div className="relative w-full md:w-[40%]">
        <img
          src={work}
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