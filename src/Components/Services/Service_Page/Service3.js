import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
export default function Service_Card3(){


    const continents = ['Educational Institutions such as Schools, Colleges or Universities',
     'Workplace',
      'Hospitals and other Medical Centres', 
      'Shopping Centres',
       'Gyms and Fitness Centres', 
       'Movie Theatres and Other Recreational Centres',
       'Excursion Activities', 
       'Community Activities',
       'Social visits to a friend or a family member’s place'


];

    return(
        <>
        <PageIntro page_name="Assist Travel / Transport"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Assist Travel / Transport

        </h1>
        <p className="text-sm leading-relaxed md:text-lg">

          </p>
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          Travelling to places using assistive equipment can be challenging at times if you do not have access to an appropriately modified vehicle for transportation. If you are planning to hire an assistant who can help with travel and transport across various locations in Sydney, our skilled support workers are here to help.
We have support workers who can provide the assistance you need to safely travel to a location of your choice using highly accessible vehicles. Furthermore, our team can assist you with the use of public transportation to meet your travel needs.
          </p>
        </div>
 
   
        <div>
          <p className="mb-4 text-sm leading-relaxed md:text-lg">
          Our team of support workers can assist you with travel arrangements to attend:
          </p>
        </div>
    



{/* 
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
                        <span className="text-lg font-medium text-blue-900">{continent}</span>
                    </div>
                </div>
            ))}
        </div> */}


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




        <div>
          <p className="text-sm leading-relaxed md:text-lg">
          We provide a highly personalised service to meet your travel needs with your safety at heart and guarantee an enjoyable experience when receiving support from our friendly, caring and compassionate team of support workers.
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