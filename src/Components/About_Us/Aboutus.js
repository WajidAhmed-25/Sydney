import HowWeWork from "./How_we_work/HowWeWork";
import IntroAboutUs from "./Introduction/Intro_AboutUs";
import WhyUs from "./Why_Us/WhyUs";
import Divider from "../Divider/Divider";
import PageIntro from "../PageIntro/PageIntro";
import Devider from "../Divider/Divider";

import Badge2 from "../NDIS Badge/badge2";

export default function AboutUs() {

    return (
        <>
  <div className="">
            <PageIntro page_name="About Us"/>
            <IntroAboutUs />
            <Devider/>
            <WhyUs />
            <Divider />
            <HowWeWork />
  </div>

        </>

    )
}