import { useEffect, useState } from 'react';
import dropDown from '../../assets/Images/dropdown.svg'
import WhatsappChatButton from '../Whatsapp_Chat_Button/Whatsapp_Chat_Button';
import logo_data from  './Scary-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import my_logo from './scare.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Service_Card from '../Services/Service_Page/Service';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function MyNavbar() {




	const navigate = useNavigate();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleNavigation = (path) => {
		navigate(path);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	const handleMouseLeave = () => {
		setIsDropdownOpen(false);
	};

	const handleMouseEnter = () => {
		setIsDropdownOpen(true);
	};

	useEffect(() => {
		const burger = document.querySelectorAll('.navbar-burger');
		const menu = document.querySelectorAll('.navbar-menu');
		const close = document.querySelectorAll('.navbar-close');
		const backdrop = document.querySelectorAll('.navbar-backdrop');

		const toggleMenu = () => {
			menu.forEach(item => item.classList.toggle('hidden'));
		};

		burger.forEach(item => {
			item.addEventListener('click', toggleMenu);
		});

		close.forEach(item => {
			item.addEventListener('click', toggleMenu);
		});

		backdrop.forEach(item => {
			item.addEventListener('click', toggleMenu);
		});

		return () => {
			burger.forEach(item => {
				item.removeEventListener('click', toggleMenu);
			});

			close.forEach(item => {
				item.removeEventListener('click', toggleMenu);
			});

			backdrop.forEach(item => {
				item.removeEventListener('click', toggleMenu);
			});
		};
	}, []);


  const continents = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'South America', 'Australia'];




	return (
		<>

			<div onMouseLeave={handleMouseLeave}>
				{/* Desktop View */}
			
				<nav className="fixed bg-white border-b-4  border-[#0b1056]  z-[1000] w-full px-4 py-[2px] flex justify-between items-center">
				
					<div className="h-20 ml-4 w-36 rounded-xl logo_div">
		 <img onClick={() => handleNavigation('/')} src={my_logo} alt="Sydney 24/7 Care" className='object-cover w-full h-full'  /> 
					</div>
					<div className="lg:hidden">
						<button className="flex items-center p-3 text-blue-600 navbar-burger">
							<svg className="block w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Mobile menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
							</svg>
						</button>
					</div>
					<ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
					
					
						<li>
  <button
    onClick={() => handleNavigation('/')}
    className="relative text-md font-semibold text-[#0b1056] hover:text-[#0b1056] transition-all duration-300 hover:text-lg
    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 hover:before:w-full"
  >
    Home
  </button>
</li>

					
					
						<li className="text-gray-300">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
							</svg>
						</li>
						<li><button onClick={() => handleNavigation('/AboutUs')}     className="relative text-md font-semibold text-[#0b1056] hover:text-[#0b1056] transition-all duration-300 hover:text-lg
    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 hover:before:w-full">About Us</button></li>
						<li className="text-gray-300">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
							</svg>
						</li>





<li className="relative" onMouseEnter={handleMouseEnter}>
  <button
    className="relative text-md font-semibold text-[#0b1056] transition-all duration-300 hover:text-lg hover:text-[#0b1056] group"
    onClick={toggleDropdown}
  >
    <span className="flex items-center">
      Services
	  <FontAwesomeIcon icon={faChevronDown} className='ml-4' />
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
  </button>
  {isDropdownOpen && (
    <ul
      className="absolute mt-6 -ml-16 text-center transition duration-200 ease-in-out transform bg-white border-[#0b10567e] border-2 rounded-lg shadow-xl w-72 -left-6 hover:scale-105 hover:shadow-2xl"
      onMouseLeave={handleMouseLeave}
    >


<li><a href='/Assist_Life_Stage_Transition ' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Assist Life Stage Transition </a></li>
  <li><a href='/Assist_Personal_Activities' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Assist Personal Activities</a></li>
  <li><a href='/Assist_Travel_/_Transport' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Assist Travel / Transport</a></li>
  <li><a href='/Community_participation' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Community participation</a></li>
  <li><a href='/Daily_Tasks_/_Shared_Living' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Daily Tasks / Shared Living</a></li>
  <li><a href='/Telehealth' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Telehealth</a></li>
  <li><a href='/Development_of_Daily_Living_and_Life_Skills' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Development of Daily Living and Life Skills</a></li>
  <li><a href='/Innovative_Community_Participation' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Innovative Community Participation</a></li>
 <li><a href='/Development_Life_skills' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Development-Life Skills</a></li>
  <li><a href='/Household_tasks' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Household Tasks</a></li>
  <li><a href='/service11' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Social and Participating Community</a></li>
 
 
  <li><a href='#' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Group/Centre Activities</a></li>
  

    </ul>
  )}
</li>










						<li className="text-gray-300">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
							</svg>
						</li>
						<li><button onClick={() => handleNavigation('/NDIS')}     className="relative text-md font-semibold text-[#0b1056] hover:text-[#0b1056] transition-all duration-300 hover:text-lg
    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 hover:before:w-full">NDIS</button></li>
						<li className="text-gray-300">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
							</svg>
						</li>
						<li><button onClick={() => handleNavigation('/Careers')}     className="relative text-md font-semibold text-[#0b1056] hover:text-[#0b1056] transition-all duration-300 hover:text-lg
    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 hover:before:w-full">Careers</button></li>
						<li className="text-gray-300">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
							</svg>
						</li>
						<li><button onClick={() => handleNavigation('/ContactUs')}      className="relative text-md font-semibold text-[#0b1056] hover:text-[#0b1056] transition-all duration-300 hover:text-lg
    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 hover:before:w-full">Contact</button></li>
					</ul>
				
					<div className='hidden lg:inline-block'>
						<WhatsappChatButton />
					</div>

				</nav>


				


<div className="navbar-menu relative z-[1000] hidden">
  <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"></div>
  <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-3/4 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r shadow-lg z-[1050]">
    <div className="flex items-center justify-between mb-2">
      <button className="flex items-center justify-center w-full ">
     
		<img onClick={() => handleNavigation('/')} src={my_logo} alt="Sydney 24/7 Care" className='w-32 h-32 '  /> 
      </button>
      <button className="navbar-close">
        <svg className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div>
      <ul className="flex flex-col items-center justify-center w-full space-y-4">
        <li className="mb-1">
          <button onClick={() => handleNavigation('/')} className="block p-4 text-sm font-semibold text-gray-400 transition duration-200 ease-in-out transform rounded hover:bg-blue-50 hover:text-blue-600">
            Home
          </button>
        </li>
        <li className="mb-1">
          <button onClick={() => handleNavigation('/AboutUs')} className="block p-4 text-sm font-semibold text-gray-400 transition duration-200 ease-in-out transform rounded hover:bg-blue-50 hover:text-blue-600">
            About Us
          </button>
        </li>
        <li className="relative">
          <button className="block p-4 text-sm font-semibold text-gray-400 transition duration-200 ease-in-out transform rounded hover:bg-blue-50 hover:text-blue-600" onClick={toggleDropdown}>
            Services
          </button>
          {isDropdownOpen && (
            <ul className="absolute w-64 mt-2 -left-20 bg-white border rounded shadow-lg z-[1100] right-0 transform translate-y-2">


<li><a href='/Assist_Life_Stage_Transition ' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Assist Life Stage Transition </a></li>
  <li><a href='/Assist_Personal_Activities' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Assist Personal Activities</a></li>
  <li><a href='/Assist_Travel_/_Transport' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Assist Travel / Transport</a></li>
  <li><a href='/Community_participation' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Community participation</a></li>
  <li><a href='/Daily_Tasks_/_Shared_Living' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Daily Tasks / Shared Living</a></li>
  <li><a href='/Telehealth' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Telehealth</a></li>
  <li><a href='/Development_of_Daily_Living_and_Life_Skills' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Development of Daily Living and Life Skills</a></li>
  <li><a href='/Innovative_Community_Participation' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Innovative Community Participation</a></li>
 <li><a href='/Development_Life_skills' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Development-Life Skills</a></li>
  <li><a href='/Household_tasks' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Household Tasks</a></li>
  <li><a href='/service11' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Social and Participating Community</a></li>
 
 
  <li><a href='#' className="block w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 ease-in-out transform rounded-md hover:text-white hover:bg-[#0b1056] hover:scale-105">Group/Centre Activities</a></li>
  
           
         
            </ul>
          )}
        </li>
        <li className="mb-1">
          <button onClick={() => handleNavigation('/NDIS')} className="block p-4 text-sm font-semibold text-gray-400 transition duration-200 ease-in-out transform rounded hover:bg-blue-50 hover:text-blue-600">
            NDIS
          </button>
        </li>
        <li className="mb-1">
          <button onClick={() => handleNavigation('/Careers')} className="block p-4 text-sm font-semibold text-gray-400 transition duration-200 ease-in-out transform rounded hover:bg-blue-50 hover:text-blue-600">
            Careers
          </button>
        </li>
        <li className="mb-1">
          <button onClick={() => handleNavigation('/ContactUs')} className="block p-4 text-sm font-semibold text-gray-400 transition duration-200 ease-in-out transform rounded hover:bg-blue-50 hover:text-blue-600">
            Contact
          </button>
        </li>
      </ul>
    </div>
    <div className="mt-auto">
      <div className="flex justify-between pt-6">
  
      </div>
      <WhatsappChatButton className="z-[1200]" /> 
      <p className="my-4 text-xs text-center text-gray-400">
        <span>© 2024 ALL RIGHTS RESERVED | DESIGN BY <span onClick={() => window.open('https://leadingedge.vercel.app/', '_blank')} className='text-blue-400 underline cursor-pointer'>LeadingEdge Technologies</span></span>
      </p>
    </div>
  </nav>
</div>





     
     


			</div>

    
		</>
	);
}