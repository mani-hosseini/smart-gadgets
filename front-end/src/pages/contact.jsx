import React from 'react'
import BreadcrumbBox from "../components/ui/BreadcrumbBox";
import MainContainer from "../components/ui/MainContainer";
import ContactSection from "../components/contact/ContactSection";
import ContactInfoBox from "../components/contact/ContactInfoBox";
import ContactMapSection from "../components/contact/ContactMapSection";
import ContactFormSection from "../components/contact/ContactFormSection";

export default function Contact() {
  return (
    <>
      <MainContainer >
        <BreadcrumbBox pageName="تماس با ما" />
      <ContactSection />
      <ContactInfoBox />
      <ContactMapSection />
      <ContactFormSection />
      </MainContainer>

    </>
  )
}
