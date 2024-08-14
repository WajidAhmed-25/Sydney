import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappChatButton = () => {
    const whatsappNumber = '+61450481989';

    const handleClick = () => {
        const url = `https://wa.me/${whatsappNumber}`;
        window.open(url, '_blank');
    };

    return (
        <div class="relative lg:inline-flex items-center ml-20 max-md:ml-20 max-sm:ml-20 max-[522px]:ml-[70px]  max-[450px]:ml-8 max-[355px]:ml-6 justify-center gap-4 group">
            <div class="inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
            </div>
            <button
                title="Contact"
                onClick={handleClick}
                class="group lg:inline-flex tracking-wide inline-flex items-center justify-center text-base rounded-xl  bg-[#15194b] text-white px-[13px] py-[9px] font-semibold transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            >
                Chat on WhatsApp
                <FaWhatsapp className="mt-0.5 ml-2 -mr-1" size={24} />
            </button>
        </div>
    );
};

export default WhatsappChatButton;




///----------------------------------------------------------------------------------------------------------------------------------///