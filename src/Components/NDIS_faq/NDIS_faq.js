import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageIntro from "../PageIntro/PageIntro";

export default function NDISfaq() {

    const navigate = useNavigate();

    const handleNavigation = (path) => {
		navigate(path);
	};

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const faqData = [
        {
            question: "How can I access support services?",
            answer: "Accessing our support services is straightforward. You can start by signing up on our platform, where you can then request support services tailored to your needs. Our team will guide you through the process."
        },
        {
            question: "What are the costs associated with your services?",
            answer: "Our services are designed to be affordable and accessible. We offer various plans, including free options for initial consultations. For ongoing support and specialized services, we have flexible pricing to fit different needs and budgets."
        },
        {
            question: "What types of assistance are available?",
            answer: "We provide a wide range of assistance, including personalized support plans, access to resources, and guidance on navigating services for individuals with disabilities. Our goal is to connect you with the right resources and support."
        },
        {
            question: "Can I modify or update my support plan?",
            answer: "Yes, you can modify or update your support plan at any time. We work with you to ensure that your plan evolves with your needs, providing the flexibility to adapt as necessary."
        },
        {
            question: "How do I provide feedback about your services?",
            answer: "We value your feedback and strive to improve our services continuously. You can provide feedback through our online form, via email, or during follow-up consultations with our support team."
        }
    ];
    

    return (
        <>
            <PageIntro page_name="NDIS"/>
            <section className="py-2 pb-16 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-[#0b1056] underline sm:text-4xl lg:text-5xl underline-offset-8 max-lg:mt-6 max-sm:mt-14">
                            Explore Common Questions
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        {faqData.map((faq, index) => (
                            <div key={index} className="font-semibold transition-all duration-200 bg-white border-2 rounded-md shadow-lg cursor-pointer border-[#0b1056] hover:text-[#0b1056] hover:bg-[#dbdbde]">
                                <button
                                    type="button"
                                    onClick={() => toggleSection(index)}
                                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                >
                                    <span className="flex text-lg font-semibold text-[#0b1056] hover:text-white">{faq.question}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className={`w-6 h-6 text-[#0b1056] transition-transform ${openSection === index ? 'rotate-180' : ''}`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {openSection === index && (
                                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-[#0b1056]">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-600 textbase mt-9">
                        Still have questions?&nbsp;&nbsp;
                        <span onClick={() => handleNavigation('/ContactUs')} className="font-medium text-[#0b1056] underline transition-all duration-200 cursor-pointer underline-offset-4 text-tertiary hover:text-tertiary focus:text-tertiary hover-underline">
                            Contact our support
                        </span>
                    </p>
                </div>
            </section>
        </>
    );
}