import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import work from '../assist.png'
export default function Service_Card1(props){
    return(
        <>
        <PageIntro page_name="Assist Life Stage Transition"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Assist Life Stage Transition
        </h1>
        <p className="text-sm leading-relaxed md:text-lg">
        <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>  Life transitions can be difficult, and sometimes require the support of someone else.
          </p>
        <div className="mt-6 mb-4 md:mb-6">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>    Sydney 24/7 care offers assistance with life stage and transition services for individuals who want our support to live independently in their home.
          </p>
        </div>
 
        <div className="mb-4 md:mb-6">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>    We prioritize client’s wishes and assist them to maintain their financial resources. We have highly qualified and trained professionals who are competent enough to assist clients in life transition stages such as providing financial mentoring and budget assistance, daily planning support, capacity building, decisions making and more.
          </p>
        </div>
        <div>
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>    Get assistance with life stages and transition and participate in your community with liveliness.
          </p>
        </div>
        <div>
          <p className="mt-4 text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>       The root of all our services is trust, reliability, empathy and understanding.
          </p>
        </div>
      </div>
      <div className="relative w-full md:w-[40%]">
        <img
          src={work}
          alt="Person at counter"
          className="object-cover w-full h-64 bg-center md:h-full "
        />
        <Link to="/ContactUs" className="absolute px-10 py-4 text-sm font-semibold bg-white cursor-pointer text-blue-950 hover:border-white hover:border-2 hover:bg-blue-950 hover:text-white bottom-4 left-4 md:bottom-10 md:left-10 md:text-lg">
  Contact Us &#8250;
</Link>
      </div>
    </div>
        </>
    )
}