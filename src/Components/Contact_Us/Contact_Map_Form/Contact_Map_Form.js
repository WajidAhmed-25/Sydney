// import { useState } from "react";
// import bg_d from '../../Product_Slider/w.jpg'


// export default function ContactMapForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: ""
//       });
//   };

//   return (
//     <>
//       <section className="mb-16">
//         <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
//           <iframe
//             title="map"
//        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.8980740752236!2d151.0815803755047!3d-33.789130173257156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a430ef11d451%3A0x5f7d9c9dca016d3!2sUnit%208%2F7%20May%20St%2C%20Eastwood%20NSW%202122%2C%20Australia!5e0!3m2!1sen!2s!4v1723661715531!5m2!1sen!2s" 
//            width="100%" height="480" allowFullScreen="" loading="lazy"></iframe>
//         </div>
//         <div className="container justify-center px-6 md:px-12">
//           <div
//             className="block rounded-lg w-[90%] bg-[hsla(0,0%,100%,0.8)] ml-auto mr-auto md:pt-16 px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
//             <div className="bg-gradient-to-br to-indigo-800 from-[#0b1056] w-full rounded-lg -mt-4" style={{ backgroundImage: `url(${bg_d})`}}>
//               <div className="">
//                 <div className="p-2 md:p-4">
//                   <h1 className="pb-8 text-3xl font-semibold text-center text-white underline md:text-4xl lg:text-5xl underline-offset-8">Contact Now</h1>
//                   <form className="flex flex-col items-center" onSubmit={handleSubmit}>
//                     <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
//                       <div className="flex flex-col md:flex-row">
//                         <input
//                           id="name"
//                           type="text"
//                           className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 md:w-1/2 md:mr-2 focus:ring-2 focus:ring-blue-600"
//                           placeholder="Name"
//                           value={formData.name}
//                           onChange={handleChange}
//                         />
//                         <input
//                           id="email"
//                           type="email"
//                           className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 md:w-1/2 md:ml-2 focus:ring-2 focus:ring-blue-600"
//                           placeholder="Email"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <input
//                         id="subject"
//                         type="text"
//                         placeholder="Subject"
//                         className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 focus:ring-2 focus:ring-blue-600"
//                         value={formData.subject}
//                         onChange={handleChange}
//                       />
//                       <textarea
//                         id="message"
//                         rows="5"
//                         placeholder="Say Something"
//                         className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 focus:ring-2 focus:ring-blue-600"
//                         value={formData.message}
//                         onChange={handleChange}
//                       ></textarea>
//                     </div>
//                     <button
//                       className="px-4 py-2 mt-5 font-semibold text-black transition duration-300 ease-in-out bg-white border-2 border-purple-800 rounded-md text-md hover:bg-purple-700 hover:text-white hover:border-white/70 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                       type="submit"
//                     >
//                       Send Message
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






























import { useState } from "react";
import axios from "axios";
import bg_d from '../../Product_Slider/w.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMapForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      setStatus(response.data.message);
      
      
      toast.success('Thank you for contacting Sydney Care 24/7. Your response has been recorded. You will be contacted shortly.');

 
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setStatus('Error sending email');

   
      toast.error('Error sending email. Please try again.');
    }
  };

  return (
    <>
      <section className="mb-16">
        <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.8980740752236!2d151.0815803755047!3d-33.789130173257156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a430ef11d451%3A0x5f7d9c9dca016d3!2sUnit%208%2F7%20May%20St%2C%20Eastwood%20NSW%202122%2C%20Australia!5e0!3m2!1sen!2s!4v1723661715531!5m2!1sen!2s"
            width="100%" height="480" allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className="container justify-center px-6 md:px-12">
          <div
            className="block rounded-lg w-[90%] bg-[hsla(0,0%,100%,0.8)] ml-auto mr-auto md:pt-16 px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="bg-gradient-to-br to-indigo-800 from-[#0b1056] w-full rounded-lg -mt-4" style={{ backgroundImage: `url(${bg_d})`}}>
              <div className="p-2 md:p-4">
                <h1 className="pb-8 text-3xl font-semibold text-center text-white underline md:text-4xl lg:text-5xl underline-offset-8">Contact Now</h1>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                  <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                    <div className="flex flex-col md:flex-row">
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 md:w-1/2 md:mr-2 focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter First Name here"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <input
                        id="lastname"
                        type="text"
                        className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 md:w-1/2 md:ml-2 focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter Last Name here"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex flex-col md:flex-row">
                      <input
                        id="phone"
                        type="text"
                        className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 md:w-1/2 md:mr-2 focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 md:w-1/2 md:ml-2 focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter Email here"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <input
                      id="subject"
                      type="text"
                      placeholder="Enter Subject here"
                      className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 focus:ring-2 focus:ring-blue-600"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Say Something"
                      className="w-full px-4 py-2 my-2 bg-white rounded-md outline-none text-black/50 focus:ring-2 focus:ring-blue-600"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    className="px-4 py-2 mt-5 font-semibold text-black transition duration-300 ease-in-out bg-white border-2 rounded-md border-blue-950 text-md hover:bg-blue-950 hover:text-white hover:border-white/70 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ToastContainer autoClose={5000} hideProgressBar newestOnTop />
    </>
  );
}







