import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Service_Card13(props){
    return(
        <>
        <PageIntro page_name="Assist Product-Personal Care/Safety"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Assist Product-Personal Care/Safety
        </h1>
        <p className="mt-4 text-sm leading-relaxed md:text-lg">
        <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/> Assist prod-personal care and safety will provide safe equipment for personal care and safety of individuals who suffer from disability and have special needs. These products are consumables and home modifications that will provide comfort and a secure environment. The products include beds and pressure mattresses, toilet and bathroom equipment and specialised clothing and continence needs like adult diapers. Every product will ensure that your life can be happier and relaxed. It will give you confidence and reassure you of a life that is snug and at ease. All the assistive products for personal care and safety are of the best quality and are available to all the participants of NDIS program.
          </p>
  
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