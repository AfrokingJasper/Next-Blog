import React from "react";
import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="send me your questions or messages" />
      </Head>
      <ContactForm />;
    </React.Fragment>
  );
}

export default ContactPage;
