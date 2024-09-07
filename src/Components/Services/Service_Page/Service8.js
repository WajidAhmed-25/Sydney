import PageIntro from "../../PageIntro/PageIntro";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
export default function Service_Card8(props){



    const continents = [
  

'The importance of community engagement, social contribution and relationships in maintaining personal wellbeing',
'Self-awareness and self-care',
'Gaining awareness of personal interests, skillsets and passions and linking these to employment pathways',
'Emotional awareness and self-regulation',
'Adaptive social competency including increased awareness of social norms and expectations',
'Their relationship with their disability, independence, confidence and self-worth',
'Navigating systems and programs to successfully participate in their community and employment pathwayPreparation and support to access training and employment opportunities',
'Capacity building for seeking assistance in the community context without ongoing formalised supports',
'How to access Innovative Community Participation'

        
         ];



    return(
        <>
        <PageIntro page_name="Innovative Community Participation"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Innovative Community Participation
        </h1>
        <p className="text-sm leading-relaxed md:text-lg">

          </p>
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
    

          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>    Participation Program is designed to support NDIS participants to build skills to actively participate in their community.  Through side-by-side practice, the program involves highly skilled Community Engagement Practitioners who assist participants to expand their opportunities for community participation and employment.  Community Engagement Practitioners adopt a capacity-building, community-based approach by working with participants in their local community to increase the likelihood of uptake and successful transition away from the service to informal supports and/or employment.


          </p>
        </div>
     
 

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>    Community Engagement Practitioners maintain a focus on resilience, wellbeing and personal growth to successfully connect to the community, however each service is tailored to best suit the participant, and their goals, to allow them to get the most out of the service. 
          </p>
        </div>

      

       
 

        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">  
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>     As appropriate, participants who access this program can expect support working on:

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
    
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>      Let us be there when you need us most – call our friendly team today!
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