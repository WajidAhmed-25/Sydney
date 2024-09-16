// import PageIntro from "../../PageIntro/PageIntro";

// export default function IntroCareer() {

//   return (
//     <>
//       <PageIntro page_name="Careers"/>
//       <br />
//       <section class="mb-8">
//         <div class="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
//           <div>
//             <h2 class="text-3xl font-bold text-center sm:text-5xl text-[#0b1056] underline underline-offset-8 pb-6">New Features</h2>
//             <p class="max-w-3xl mx-auto mt-4 text-xl text-center ">Explore the latest features that enhance your learning experience and make it even more exciting.</p>
//           </div>
//           <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
//             <div>
//               <div class="mt-4 space-y-12">
//                 <div class="flex">
//                   <div class="flex-shrink-0">
//                     <div class="flex items-center justify-center w-12 h-12 rounded-md">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                         class="lucide lucide-rocket">
//                         <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
//                         </path>
//                         <path
//                           d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
//                         </path>
//                         <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
//                         <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
//                       </svg></div>
//                   </div>
//                   <div class="ml-4">
//                     <h4 class="text-lg font-medium  text-[#0b1056] ">Advanced Learning Algorithms</h4>
//                     <p class="mt-2 ">Discover our improved learning algorithms that adapt to your preferences and provide even more personalized learning suggestions.</p>
//                   </div>
//                 </div>
//                 <div class="flex">
//                   <div class="flex-shrink-0">
//                     <div class="flex items-center justify-center w-12 h-12 rounded-md">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                         class="lucide lucide-bookmark-plus">
//                         <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
//                         <line x1="12" x2="12" y1="7" y2="13"></line>
//                         <line x1="15" x2="9" y1="10" y2="10"></line>
//                       </svg></div>
//                   </div>
//                   <div class="ml-4">
//                     <h4 class="text-lg font-medium  text-[#0b1056] ">Interactive Learning Resources</h4>
//                     <p class="mt-2 ">Access an extensive library of interactive resources that make your learning journey engaging and interactive.</p>
//                   </div>
//                 </div>
//                 <div class="flex">
//                   <div class="flex-shrink-0">
//                     <div class="flex items-center justify-center w-12 h-12 rounded-md">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                         class="lucide lucide-video">
//                         <path d="m22 8-6 4 6 4V8Z"></path>
//                         <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
//                       </svg></div>
//                   </div>
//                   <div class="ml-4">
//                     <h4 class="text-lg font-medium  text-[#0b1056]">Enhanced Video Streaming</h4>
//                     <p class="mt-2 ">Experience seamless video integration with enhanced streaming capabilities, providing a better and more uninterrupted learning experience.</p>
//                   </div>
//                 </div>
//                 <div class="flex">
//                   <div class="flex-shrink-0">
//                     <div class="flex items-center justify-center w-12 h-12 rounded-md">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                         class="lucide lucide-file-question">
//                         <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
//                         <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
//                         <path d="M12 17h.01"></path>
//                       </svg></div>
//                   </div>
//                   <div class="ml-4">
//                     <h4 class="text-lg font-medium  text-[#0b1056] ">Advanced Quiz Generation </h4>
//                     <p class="mt-2 ">Take your knowledge testing to the next level with advanced quiz generation, providing more customization options for your quizzes.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div aria-hidden="true" class="mt-10 lg:mt-0">
//               <img alt="pics" width="600" height="600" src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" class="mx-auto rounded-lg shadow-lg dark-bg-gray-500" />
//             </div>
//           </div>
//         </div>
//       </section>
//    </>
//   )
// }


































import PageIntro from "../../PageIntro/PageIntro";
import work from './we_work.png'

export default function IntroCareer() {

  return (
    <>
      <PageIntro page_name="Careers"/>
      <br />
      <section className="mb-8">
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold text-center sm:text-5xl text-[#0b1056] underline underline-offset-8 pb-6">New Features</h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-[#0b1056]">Discover the latest features designed to enhance our support services and provide a better experience for individuals with disabilities.</p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-rocket text-[#0b1056]">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0b1056]">Customized Support Plans</h4>
                    <p className="mt-2 text-[#0b1056]">Our new features allow for highly personalized support plans, ensuring that each individual receives tailored assistance based on their specific needs and preferences.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-bookmark-plus text-[#0b1056]">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                        <line x1="12" x2="12" y1="7" y2="13"></line>
                        <line x1="15" x2="9" y1="10" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0b1056]">Interactive Support Resources</h4>
                    <p className="mt-2 text-[#0b1056]">Access a diverse range of interactive resources designed to make support services more engaging and informative, helping you make the most of our offerings.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-video text-[#0b1056]">
                        <path d="m22 8-6 4 6 4V8Z"></path>
                        <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0b1056]">Enhanced Video Consultations</h4>
                    <p className="mt-2 text-[#0b1056]">Our platform now supports enhanced video consultations, providing a smoother and more reliable experience for remote support and guidance.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-file-question text-[#0b1056]">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0b1056]">Advanced Feedback Tools</h4>
                    <p className="mt-2 text-[#0b1056]">Our new feedback tools provide more options for users to share their experiences and suggestions, helping us continuously improve our services.</p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img alt="Support Services" width="600" height="600" src={work} className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}






