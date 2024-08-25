export default function My_Demo(){


    return(
        <>
        
        
        
        <nav className="bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/path-to-logo.png" alt="Sydney Care Logo" className="h-10" />
        </div>

        {/* Menu Items */}
        <div className="hidden space-x-8 font-semibold text-blue-900 md:flex">
          <a href="#" className="hover:text-blue-700">Home</a>
          <a href="#" className="hover:text-blue-700">About Us</a>
          <div className="relative group">
            <button className="flex items-center hover:text-blue-700">
              Services
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute hidden w-48 py-2 mt-1 bg-white rounded shadow-lg group-hover:block">
              <a href="#" className="block px-4 py-2 text-sm text-blue-900 hover:bg-gray-100">Service 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-blue-900 hover:bg-gray-100">Service 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-blue-900 hover:bg-gray-100">Service 3</a>
            </div>
          </div>
          <a href="#" className="hover:text-blue-700">NDIS</a>
          <a href="#" className="hover:text-blue-700">Careers</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </div>

        {/* Chat on WhatsApp Button */}
        <a href="#" className="hidden px-4 py-2 text-sm text-white bg-blue-900 rounded-full md:block hover:bg-blue-700">
          Chat on WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button className="text-blue-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="bg-white border-t border-gray-200 shadow-md md:hidden">
        <a href="#" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Home</a>
        <a href="#" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">About Us</a>
        <a href="#" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Services</a>
        <a href="#" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">NDIS</a>
        <a href="#" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Careers</a>
        <a href="#" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Contact</a>
        <a href="#" className="block px-4 py-2 mx-4 mt-2 text-center text-white bg-blue-900 rounded hover:bg-blue-700">
          Chat on WhatsApp
        </a>
      </div>
    </nav>
        
        </>
    )
}