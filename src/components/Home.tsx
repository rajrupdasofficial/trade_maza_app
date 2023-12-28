import React from "react";
import Header from "./Header";
import Middle from "./Moddle";
import Card from "./Cards";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <>
      {/* section 1 is header section */}
      <Header />
      {/* section 2 middle section */}
      <Middle />
      {/* cards information group */}
      <Card />
      {/* contact form */}
      <ContactForm />
      {/* Footer page */}
      <Footer />
    </>
  );
};
export default Home;
