import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import work from '../assist.png'
export default function Service_Card14(props){


    const continents = [
  

        'Arts and crafts workshops',
        'Music and dance sessions',
        'Sports and fitness programs',
        'Social outings and excursions',
        'Gardening and nature activities',
        'Board games and puzzle sessions',
        'Cooking and baking classes',
       'Educational workshops and skill-building sessions',
        

        
         ];


    return(
        <>
        <PageIntro page_name="Group/Centre Activities"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Group/Centre Activities
        </h1>
        <p className="text-sm leading-relaxed md:text-lg">
        <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>  Engaging in group and centre-based activities is an essential part of building social skills, enhancing mental well-being, and fostering a sense of belonging. Our NDIS-approved group and centre activities are designed to bring individuals together in a safe, supportive, and inclusive environment where they can participate in a variety of enriching activities.

          </p>
        <div className="mt-4 mb-4 md:mb-6">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/> 

          Whether you're looking to socialize, develop new skills, or simply enjoy some time away from home, our experienced support workers are here to guide and assist you at every step. These activities are tailored to your individual needs and preferences, ensuring that everyone is able to participate at their own comfort level.
          </p>
        </div>



        <div>
          <p className="mt-4 text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/> 
          Our group and centre activities may include:

          </p>
        </div>



        
        <div className="flex flex-wrap p-4 -mx-2 lg:w-[95%] sm:mx-auto sm:mb-2">
    {continents.map((continent, index) => (
        <div key={index} className="w-full p-2 sm:w-1/2">
            <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="flex-shrink-0 w-6 h-6 mr-4 text-blue-900"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-sm font-medium text-blue-900 sm:text-base md:text-lg">
                    {continent}
                </span>
            </div>
        </div>
    ))}
</div>





 
        <div className="mb-4 md:mb-6">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/> Participating in these activities not only helps to build valuable social connections but also provides opportunities to develop essential life skills, improve physical health, and boost self-confidence. We aim to create a positive and empowering environment where everyone feels welcome and valued.
  
          </p>
        </div>
        <div>
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white "/>  
Whether you’re looking for regular group engagement or just occasional participation, our Group and Centre Activities service will enhance your overall well-being and help you thrive both socially and personally.
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