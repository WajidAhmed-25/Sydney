import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Service_Card12(props){
    return(
        <>
        <PageIntro page_name="Assist Access/Maintain Employ"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Assist Access/Maintain Employ
        </h1>
        <p className="text-sm leading-relaxed md:text-lg">
        <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>  Assist Access/Maintain Employment is a service category offered under the National Disability Insurance Scheme (NDIS). It is designed to provide support to individuals with disabilities who are seeking to access employment or maintain their existing employment.
          </p>
        <div className="mt-6 mb-4 md:mb-6">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>   At Sydney 24/7 Care, we offer Assist Access/Maintain Employment services to support individuals with disabilities in their employment journey. Our services are designed to address the unique needs and goals of each participant, empowering them to access and maintain meaningful employment.
          </p>
        </div>
 
        <h1 className="mt-4 mb-2 text-xl font-bold md:text-3xl md:mb-12">
        Realise Your Career Aspirations with InnateCare's Empowering Assist Access/Maintain Employment Service
        </h1>


        <div>
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>  Sydney 24/7 Care, a registered NDIS service provider, is here to help you reach your goals with our Assist Access / Maintain Employment (AAME) service.
          </p>
        </div>
        <div>
          <p className="mt-4 text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>  More than anything else, it helps participants/clients acknowledge the barriers to work and assists them with sustainable employment. Sydney 24/7 Care also teaches ways in which the participants can transition from supported employment to open employment. We also teaches them support skills required while seeking jobs like building a resume or building confidence.
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