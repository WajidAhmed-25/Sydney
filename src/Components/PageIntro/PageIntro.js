
import bg_image from './bg.jpg'
import bg1 from './w.jpg'
import image from '../NDIS Badge/NDIS-logo.png'


export default function PageIntro(props) {


  return (
    <>
      <br />
      <br />
      <br />
      <div class="relative w-full h-[70px] sm:h-[70px] md:h-[80px] lg:h-[100px] xl:h-[120px] z-1000   ">
        <img src={bg1} alt="main_img" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 flex items-center justify-center ">
          <div class="bg-[#c2ccd8] text-[#1a1a1b] mix-blend-screen px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 mt-6">
            <h2 class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap ">{props.page_name}</h2>
          </div>
        </div>
      </div>

 

      <div className="w-full  flex flex-col justify-center items-center h-[100px]    sm:h-[120px] md:h-[140px] lg:h-[160px] xl:h-[200px] space-y-0">
        
      <div className='w-[28%] h-20 -mt-20  '> </div>

        <div className="flex items-center px-4 py-2 bg-[#070a37] rounded-md sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-8 lg:py-2 mt-0">
          <p className="text-xs font-semibold text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl">Registered</p>
          <img src={image} alt="Registered NDIS Provider" className="h-[40px] sm:h-[50px] md:h-[60px] z-1000 lg:h-[70px] xl:h-[80px] mx-2 sm:mx-3 md:mx-4 lg:mx-5" />
          <p className="text-xs font-semibold text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl">Provider</p>
        </div>
        
      </div>



    </>
  )
}





