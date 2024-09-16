import ContentHeader from "./Contact_Main/Contact_Header";
import ContactMapForm from "./Contact_Map_Form/Contact_Map_Form";
import PageIntro from "../PageIntro/PageIntro";
import { useEffect } from "react";

export default function ContactUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <PageIntro page_name="Contact Us"/>
            <ContentHeader />
            <ContactMapForm />
        </>
    )
}