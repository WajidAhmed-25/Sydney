import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Service_Card2(props){
    return(
        <>
        <PageIntro page_name="Assist Personal Activities"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Assist Personal Activities
        </h1>
        <p className="text-sm leading-relaxed md:text-lg">
        <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>   Sydney 24/7 Care is committed to bring ease into the lives of our clients with disabilities regardless of their age.
          </p>
        <div className="mt-4 mb-4 md:mb-6">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/> 
          We are a leading name for providing first-class assistance for various personal activities such as day to day activities including; home management, eating assistance, getting dressed up, toileting and all other personal care activities.
          </p>
        </div>
 
        <div className="mb-4 md:mb-6">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>   Our experienced team works closely with the clients in order to ensure that their needs are fulfilled.
          </p>
        </div>
        <div>
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>   We will tailor your goals and assist you to achieve them if you have disability. Our fully trained personal specialists provide support to you and help you to manage everyday living.
          </p>
        </div>
        <div>
          <p className="mt-4 text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>  Our services are exclusively designed to give you the life you deserve.
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