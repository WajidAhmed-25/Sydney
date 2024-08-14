import fundraising from './fundraising.png'
import empowerment from './Empowerment.png'
import plans from './plans.png'
import service from './service.png'

export default function WhyUs() {

  return (
    <>
      <section class="text-gray-700 body-font md:mt-32 md:mb-20">
        <div class="flex justify-center mt-10  font-regular  text-3xl font-extrabold text-[#0b1056] sm:text-5xl underline underline-offset-8">
          Why Us
        </div>
        <div class="container px-5 py-12 mx-auto md:mt-4">
          <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img alt="p1" src={plans} class="w-40 mb-3" />
                </div>
                <h2 class="title-font font-500 text-2xl text-[#0b1056]">Personalized Support Plans</h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img alt="p2" src={fundraising} class="w-40 mb-3" />
                </div>
                <h2 class="title-font font-500 text-2xl text-[#0b1056]">Comprehensive Funding</h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img alt="p3" src={empowerment} class="w-40 mb-3" />
                </div>
                <h2 class="title-font font-500 text-2xl text-[#0b1056]">Empowerment and Independence</h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img alt="p4" src={service} class="w-40 mb-3" />
                </div>
                <h2 class="title-font font-500 text-2xl text-[#0b1056]">Access to Expert Services</h2>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}