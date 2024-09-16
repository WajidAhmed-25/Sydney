import Devider from "../Divider/Divider";
import ApplyJob from "./Apply_Form/Apply_job";
import EmploymentRoute from "./Employment_Path/Employment";
import IntroCareer from "./Intro_Career/Intro_Career";
import { useEffect } from "react";

export default function Careers() {


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <IntroCareer />
            <Devider />
            <EmploymentRoute />
            <Devider />
            <ApplyJob />
        </>
    )
}