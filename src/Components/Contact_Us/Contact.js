import ContentHeader from "./Contact_Main/Contact_Header";
import ContactMapForm from "./Contact_Map_Form/Contact_Map_Form";
import PageIntro from "../PageIntro/PageIntro";

export default function ContactUs() {

    return (
        <>
            <PageIntro page_name="Contact Us"/>
            <ContentHeader />
            <ContactMapForm />
        </>
    )
}