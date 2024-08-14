
import bg_image from './bg.jpg'
import bg1 from './w.jpg'
export default function PageIntro(props) {


  return (
    <>
      <br />
      <br />
      <br />
      <div class="relative w-full h-[70px] sm:h-[70px] md:h-[80px] lg:h-[100px] xl:h-[120px]   ">
        <img src={bg1} alt="main_img" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-[#c2ccd8] text-[#1a1a1b] mix-blend-screen px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 mt-6">
            <h2 class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold whitespace-nowrap ">{props.page_name}</h2>
          </div>
        </div>
      </div>
    </>
  )
}