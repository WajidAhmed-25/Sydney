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
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={ () => {handleNavigation('/')}}  className="hover:text-[#0b1056]">Home</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={ () => {handleNavigation('/AboutUs')}}  className="hover:text-[#0b1056]">About Us</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={ () => {handleNavigation('/Careers')}}  className="hover:text-[#0b1056]">Careers</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={ () => {handleNavigation('/NDIS')}}  className="hover:text-[#0b1056]">NDIS</button></li>
              <li className=' hover:font-semibold hover:scale-125 hover:transition-all hover:duration-300'><button onClick={ () => {handleNavigation('/ContactUs')}}  className="hover:text-[#0b1056]">Contact us</button></li>
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
                info@sydneycare.au
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
              <button href="https://www.facebook.com/archcareofficial/" className="text-black hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </button>
              <button href="https://www.instagram.com/archcare.together.we.can/" className="text-black hover:text-pink-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button href="www.x.com" className="text-black hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-8 text-sm font-semibold text-center text-white bg-[#070a37]">
        © 2024 ALL RIGHTS RESERVED | DESIGN BY <span onClick={() => window.open('https://leadingedge.vercel.app/', '_blank')}  className='underline cursor-pointer hover:text-blue-400'>LeadingEdge Technologies</span>
      </div>
    </footer>
  );
};

export default Footer;