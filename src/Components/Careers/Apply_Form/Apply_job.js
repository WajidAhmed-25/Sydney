import { useState } from "react";
import bg_d from '../../Product_Slider/w.jpg'

export default function ApplyJob() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    option: "",
    policeCheck: "yes",
    driversLicence: "yes",
    experience: "yes",
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('option', formData.option);
    formDataToSend.append('policeCheck', formData.policeCheck);
    formDataToSend.append('driversLicence', formData.driversLicence);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('resume', formData.resume);

 

    //http://localhost:8000/api/employment-request

    fetch('https://api.sydney247care.au/api/employment-request', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Form submitted successfully');

        setFormData({
          name: '',
          phone: '',
          email: '',
          option: '',
          policeCheck: 'no',
          driversLicence: 'no',
          experience: 'no',
          resume: null,
        });

     
        document.getElementById('resume').value = ''; 
       
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      option: "",
      policeCheck: "yes",
      driversLicence: "yes",
      experience: "yes",
      resume: null,
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen py-6 mt-20 mb-16 bg-white sm:py-12 ">
        <div className="mb-20 text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#0b1056] sm:text-4xl underline underline-offset-8">
            Register Now
          </p>
        </div>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br to-[#0f1781] from-[#0b1056] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" style={{ backgroundImage: `url(${bg_d})`}}></div>
          <div className="text-white relative px-4 py-10 bg-gradient-to-br to-indigo-800 from-[#0b1056] shadow-lg sm:rounded-3xl sm:p-20" style={{ backgroundImage: `url(${bg_d})`}}>
            <div className="pb-6 text-center">
              <h1 className="text-3xl font-semibold">Get Employed Now!</h1>
              <p className="text-gray-300">Fill up the form below to send us a message.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <select
                className="w-full px-3 py-2 mb-4 font-semibold leading-tight text-[#0b1056] border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="option"
                value={formData.option}
                onChange={handleChange}
              >
                <option>Select Option</option>
                <option value="Freshers">Freshers</option>
                <option value="Intermediate"> Intermediate</option>
                <option value="Senior">Senior</option>
              </select>
              <label className="block mt-6 mb-2 font-bold text-white">
                ➤ &nbsp;&nbsp;&nbsp; Do you have a current Police Check (National Police Certificate) for employment?
              </label>
              <div className="flex justify-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="policeCheck"
                    value="yes"
                    className="w-4 h-4 text-purple-300 form-radio focus:ring-[#a8abd4]"
                    checked={formData.policeCheck === "yes"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 font-bold text-white">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="policeCheck"
                    value="no"
                    className="w-4 h-4 text-purple-300 form-radio focus:ring-[#a8abd4]"
                    checked={formData.policeCheck === "no"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 font-bold text-white">No</span>
                </label>
              </div>
              <div>
                <label className="block mt-6 mb-2 font-bold text-white">
                  ➤&nbsp;&nbsp;&nbsp;  Do you have a current Australian driver's licence?
                </label>
                <div className="flex justify-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="driversLicence"
                      value="yes"
                      className="w-4 h-4 text-white form-radio"
                      checked={formData.driversLicence === "yes"}
                      onChange={handleChange}
                    />
                    <span className="ml-2 font-bold text-white">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="driversLicence"
                      value="no"
                      className="w-4 h-4 text-white form-radio"
                      checked={formData.driversLicence === "no"}
                      onChange={handleChange}
                    />
                    <span className="ml-2 font-bold text-white">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block mt-6 mb-2 font-bold text-white">
                  ➤&nbsp;&nbsp;&nbsp;  Do you have prior experience as a disability support worker?
                </label>
                <div className="flex justify-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="yes"
                      className="w-4 h-4 text-white form-radio"
                      checked={formData.experience === "yes"}
                      onChange={handleChange}
                    />
                    <span className="ml-2 font-bold text-white">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="no"
                      className="w-4 h-4 text-white form-radio"
                      checked={formData.experience === "no"}
                      onChange={handleChange}
                    />
                    <span className="ml-2 font-bold text-white">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block mt-4 mb-2 font-bold text-white">
                  ➤ &nbsp;&nbsp;&nbsp;Upload a resume
                </label>
                <div className="flex items-center justify-center mt-4">
                  <label className="px-4 py-2 font-bold text-[#0b1056] bg-white rounded cursor-pointer hover:bg-indigo-700 hover:text-white">
                    Choose File
                    <input type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                  <span className="ml-3 text-white">{formData.resume ? formData.resume.name : "No file chosen"}</span>
                </div>
              </div>
              <div className="flex justify-between mt-12">
                <input
                  className="px-4 py-2 font-bold text-[#0b1056] bg-white rounded shadow cursor-pointer hover:bg-indigo-700 hover:border-2 hover:border-white hover:text-white focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="px-4 py-2 font-bold text-[#0b1056] bg-white rounded shadow cursor-pointer hover:bg-indigo-700 hover:text-white hover:border-2 hover:border-white focus:outline-none focus:shadow-outline"
                  type="reset"
                  onClick={handleReset}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
