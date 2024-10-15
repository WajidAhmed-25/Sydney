import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <footer className="px-4 py-8 text-black bg-gray-200 border border-gray-200 shadow-xl">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between -mx-4">
          <div className="w-full px-4 mb-6 md:w-1/4 md:mb-0">
            <h3 className="p-2 mb-4 font-bold text-center border-b-2 text-[#0b1056] border-[#0b1056]">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={() => { handleNavigation('/') }} className="hover:text-[#0b1056]">Home</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={() => { handleNavigation('/AboutUs') }} className="hover:text-[#0b1056]">About Us</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={() => { handleNavigation('/Careers') }} className="hover:text-[#0b1056]">Careers</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={() => { handleNavigation('/NDIS') }} className="hover:text-[#0b1056]">NDIS</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={() => { handleNavigation('/ContactUs') }} className="hover:text-[#0b1056]">Contact us</button></li>
            </ul>
          </div>

          <div className="w-full px-4 mb-6 md:w-1/4 md:mb-0">
            <h3 className="p-2 mb-4 font-bold text-center border-b-2 text-[#0b1056] border-[#0b1056]">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Assist_Access/Maintain_Employ" className="hover:text-[#0b1056] ">Assist Access/Maintain Employ</a>
              </li>
              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Assist_Life_Stage_Transition" className="hover:text-[#0b1056]">Assist-Life Stage, Transition</a>
              </li>
              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Assist_Personal_Activitie" className="hover:text-[#0b1056]">Assist-Personal Activities</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Assist_Product_Personal_Care/Safety" className="hover:text-[#0b1056]">Assist Product-Personal Care/Safety</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Assist_Travel_Transport" className="hover:text-[#0b1056]">Assist-Travel/Transport</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Daily_Tasks_Shared_Living" className="hover:text-[#0b1056]">Daily Tasks/Shared Living</a>
              </li>
              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Innovative_Community_Participation" className="hover:text-[#0b1056]">Innovative Community Participation</a>
              </li>
              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Community_participation" className="hover:text-[#0b1056]">Community Participation</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Telehealth" className="hover:text-[#0b1056]">Telehealth</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Development_Life_skills" className="hover:text-[#0b1056]">Development-Life Skills</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Household_tasks" className="hover:text-[#0b1056]">Household Tasks</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Social_and_Participating_Community" className="hover:text-[#0b1056]">Social and Participating Commmunity</a>
              </li>

              <li className="flex items-center hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300">
                <svg className="w-4 h-4 mr-2 text-[#0b1056]" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="5" />
                </svg>
                <a href="/Group_Centre_Activities" className="hover:text-[#0b1056]">Group/Centre Activities</a>
              </li>

            </ul>
          </div>


          <div className="w-full px-4 mb-6 md:w-1/4 md:mb-0">
            <h3 className="p-2 mb-4 font-bold text-center border-b-2 text-[#0b1056] border-[#0b1056]">CONTACT US</h3>
            <ul className="space-y-2 ">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +61 450 481 989
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                sydney247care@gmail.com
              </li>


              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm8 11H7v-2h6v2zm0-4H7V7h6v2z" />
                </svg>
                ABN: 90676089884
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm7 8h3v3h-3v-3zm-2 3H6v-3h3v3zm5-5h-4V8h4v1zm-5 0H5V8h4v1zm4-3H6V5h8v2z" />
                </svg>
                ACN: 676089884
              </li>

              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Unit 8, 7 May Street EASTWOOD NSW 2122
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Working Hours : 24/7
              </li>
            </ul>
          </div>

          <div className="w-full px-4 mb-6 md:w-1/4 md:mb-0">
            <h3 className="p-2 mb-4 font-bold text-center border-b-2 text-[#0b1056] border-[#0b1056]">FOLLOW US</h3>
            <div className="flex justify-center space-x-6 ">
              <a href="https://www.facebook.com/profile.php?id=61559218645141&mibextid=LQQJ4d" target='_blank' className="text-black hover:text-blue-500 hover:scale-125 hover:transition-all hover:duration-300 hover:cursor-pointer">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sydney-care-378448301?trk=contact-info" target='_blank' className="text-black hover:text-blue-500 hover:scale-125 hover:transition-all hover:duration-300 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.35 19h-2.66v-9h2.66v9zm-1.33-10.29c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54 1.54.69 1.54 1.54-.69 1.54-1.54 1.54zm13.68 10.29h-2.66v-4.6c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.21-1.79 2.44v4.68h-2.66v-9h2.56v1.23h.04c.36-.69 1.24-1.42 2.56-1.42 2.73 0 3.23 1.79 3.23 4.12v5.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-8 text-sm font-semibold text-center text-white bg-[#070a37]">
        © 2024 ALL RIGHTS RESERVED | DESIGN BY <span onClick={() => window.open('https://leadingedge.vercel.app/', '_blank')} className='underline cursor-pointer hover:text-blue-400'>LeadingEdge Technologies</span>
      </div>
    </footer>
  );
};

export default Footer;