import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import work from '../assist.png'



export default function Service_Card9(props){



    const continents = [
  

        'Cleaning',
        'Laundry',
        'Dish washing',
        'Changing bed linen',
        'Vacuuming and washing floors',
        'Dusting',
        'Essential ironing',
       'Meal preparation',
        'General house maintenance'
        

        
         ];



    return(
        <>
        <PageIntro page_name="Household tasks"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Household tasks

        </h1>

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
    
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>      A key factor in maintaining happiness and general wellbeing is having a clean and well organised home. The NDIS household tasks category provides you with support from experienced NDIS providers in a range of domestic chores and household activities.
Our trained support workers will be by your side to assist with all types of essential domestic chores at whichever level you require. This kind of support is designed to facilitate your daily independence, while also helping you to build the skills needed to carry out a range of household activities – all provided in the comfort of your own home.


          </p>
        </div>
     
 

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
      

          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>        Our experienced support workers can assist with a range of household tasks all throughout your home, including:



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




        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">  
    
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>       Whether you need physical assistance with these tasks, or simply someone to supervise as you build on your own skills and independence, NDIS household tasks will give you added support in daily life and empower you to live more autonomously each and every day.
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