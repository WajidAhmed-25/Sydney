
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import work from './delta.png'

export default function IntroAboutUs() {

    return (
        <>
            <section class="bg-white">
                <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
                        <div class="max-w-xl ">
                            <h2 class="text-3xl font-extrabold text-center text-[#0b1056] sm:text-5xl underline underline-offset-8 max-lg:mt-3 max-md:mt-2 ">Who We Are</h2>
                            <p class="mt-8 text-[#0b1056] text-xl font-normal "><br/><br/>  <FontAwesomeIcon icon={faRightLong}   className="mr-4 text-[#0b1056]"/>  Sydney 24/7 Care is a registered NDIS provider in Sydney, providing an extensive array of NDIS services and therapies to our participants, including mobile therapeutic services.<br/><br/>

The National Disability Insurance Scheme (NDIS) is a crucial program aimed at helping Australians with disabilities, as well as their families and carers. It grants participants financial aid to access services and resources, empowering them to actively participate in life while promoting equal opportunities for people with disabilities and supporting them in attaining their objectives.<br/><br/>

Sydney 24/7 Care serves people of all ages, from infants to senior citizens, offering tailored assistance based on each individual’s specific needs. This vital service profoundly impacts the lives of those with disabilities in Australia.<br/><br/>

If you’re an NDIS participant in search of a provider in Sydney we’re here to connect about discussing your requirements and determining how we can facilitate your journey towards achieving your goals. Contact us today to find out more about our services in Sydney.</p>

                        </div>
                        <div class="mt-12 md:mt-10">
                            <img src={work} alt="About Us" class="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}