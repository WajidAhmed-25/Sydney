import Devider from "../Divider/Divider";
import ApplyJob from "./Apply_Form/Apply_job";
import EmploymentRoute from "./Employment_Path/Employment";
import IntroCareer from "./Intro_Career/Intro_Career";

export default function Careers() {

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