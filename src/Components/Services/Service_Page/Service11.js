import PageIntro from "../../PageIntro/PageIntro";
import { useState } from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import work from '../assist.png'


export default function Service_Card11(props){
    const [openFAQ, setOpenFAQ] = useState(null); 
    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };


    const questions = [
        "What is social & community participation?",
        "What is NDIS Increased Social & Community Participation?",
        "The difference between Capacity Building and Core Support",
        "What does this support cover?",
        "What does this support not cover?"
      ];


    const faqs = [
        {
          question: "What is NDIS Increased Social & Community Participation?",
          answer: `
          Increased Social and Community Participation under the NDIS is about helping people with disability to participate in social and community activities that are beyond their usual routine or essential needs.
          It covers a wide range of activities such as going on a camp or starting dance lessons. The goal is to empower individuals to increase their independence, learn new skills, and improve their overall wellbeing.
          `,
        },
        {
            question: "The difference between Capacity Building & Core Support",
            answer: `
            There are two types of support budgets that can help you participate in your community. These are 'Capacity Building’ and 'Core Supports':
            1. Core Supports cover the ongoing help you may need to participate in your community. For example, if you need an NDIS support worker to take you to an appointment, you can use your Core Support budget to pay for that.
            2. Capacity Building is where 'Increased Social and Community Participation' support comes in. This category focuses on developing new skills, so you can achieve greater independence and confidence.
            So, while Core Supports help you with your day-to-day needs, Capacity Building supports are more focused on helping you achieve your long-term goals and become more independent. Both types of support are important, and your NDIS plan may include a mix of both to meet your specific needs.
            `,
          },
        {
          question: "What does Increased Social and Community Participation funding cover?",
          answer: `
          There are a wide variety of ways you can use your funding to increase social and community participation. You may use it to learn a new skill, explore a new hobby, or even volunteer for a cause you're passionate about.
          Here are some examples to get you started:
          1- Camping and vacation trips
          2- Lessons to help you learn new skills, like horse riding, pottery, or playing a musical instrument
          3- Training in life skills, like using public transportation or managing money
          4- Social or communication skills classes
          5- Membership fees to join a new sports team
          6- Volunteering arrangements in the community
          Just remember—it's essential that the activities you choose are considered "reasonable and necessary" and align with your NDIS plan goals. This means that the activity should contribute to your overall well-being and help you achieve the objectives outlined in your plan.
          `,
        },
        {
          question: "What does this funding not cover?",
          answer: `
          While your Capacity Building funding can go towards building skills, there are certain situations and things it can’t be used for. For example, it may cover the cost of basketball lessons for a term, but not the cost of a sports uniform.
          Here are some other things it may not cover:
          1- Medical or healthcare expenses not related to disability support
          2- Basic household expenses like rent, utilities, and groceries
          3- Personal care items like toiletries and clothing
          4- Equipment or technology not directly related to disability support
          5- Leisure activities that do not build skills related to community participation
          6- Travel or transportation costs not directly related to disability support
          That being said, there may be other sources of support available to help with these costs. For example, the Companion Card program offers free or discounted entry for support companions at participating venues and events. These avenues can help make the desired activities more accessible and affordable, further enhancing community participation.
          It's always a good idea to explore all possible avenues of support to help make the most of your NDIS funding and achieve your goals.
          `,
        },
      ];
    return(
        <>
        <PageIntro page_name="Social and community participation"/>
<div className="flex flex-col h-auto mt-16 mb-32 md:flex-row">
      <div className="flex flex-col justify-center w-full p-6 text-white bg-[#070a37] md:w-[60%] md:p-10 md:pt-20 md:pb-16">
        <h1 className="mt-2 mb-4 text-2xl font-bold md:text-5xl md:mb-16">
        Social and community participation
        </h1>
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>      Social and community participation is an opportunity to connect with others, form meaningful relationships, and take part in activities that bring us joy. The National Disability Insurance Scheme (NDIS) recognises the importance of social and community participation, and offers support for people with disability to participate in these activities.
If you’re not 100% sure about what you can use your community participation funding for, our caring team at Sydney 24/7 Care can help you get a better understanding of what is and isn't covered.
          </p>
        </div>
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>     In this guide, we’ll take a closer look at:
          <br/><br/>

          </p>
        </div>


   
        {questions.map((my) => (
            <div className="flex flex-row items-start mb-5">
                        <div
                            class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-blue-950 text-white border-4 border-white text-xl font-semibold">
                            <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2">
                                    <g data-name="menu-arrow">
                                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                        <path
                                            d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                        </path>
                                        <circle cx="12" cy="19" r="1"></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="bg-gray-100 p-5 px-10 w-full flex items-center">
                            <h4 class="text-md leading-6 font-medium text-gray-900">{my}</h4>
                        </div>
                        </div>
        ))}
                

<br/>
<br/>





        
        <div className="mb-4 md:mb-8">
          <p className="text-sm leading-relaxed md:text-lg">
          <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-white"/>         Have you heard about social and community participation, but still aren’t quite sure what it is? In simple terms, social and community participation is all about connecting with people who share your interests and taking part in activities that bring you joy.
You get to mingle with like-minded people, spend time enjoying the things you love the most, and engage with your local community. The best part is, you get to choose activities you enjoy!
Social and community participation is unique for everyone — it depends on your needs and interests. It can be as simple as hanging out at your local cafe, playing football with a team, going on bushwalks with a support worker, or learning new skills via a driving lesson.
          </p>
        </div>

        <ul className="w-full ">
  {faqs.map((faq, index) => (
    <li key={index}>
      <button
        className="relative flex items-center w-full gap-2 py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        aria-expanded={openFAQ === index}
        onClick={() => toggleFAQ(index)}
      >
        <span className="flex-1 text-white text-base-content">{faq.question}</span>
        <svg
          className={`flex-shrink-0 w-6 h-6 ml-auto fill-current transition-transform ${
            openFAQ === index ? "rotate-90" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1"></rect>
          <rect y="7" width="16" height="2" rx="1" className="rotate-90"></rect>
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openFAQ === index ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="pb-5 leading-relaxed">
          {/* Ensuring the answer is formatted properly */}
          <div className="p-4 space-y-4 text-[15px] font-semibold bg-white rounded-lg text-blue-950">
            {faq.answer.split("\n").map((paragraph, idx) => (
              <p key={idx} className="mb-4">
             {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>


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