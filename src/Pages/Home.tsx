import React from "react";
import Header from "../components/HOC/Header";
import Middle from "./ContentDescription";
import Card from "../components/UI/Cards";
import ContactForm from "../components/UI/ContactForm";
import Footer from "../components/Footer/Footer";

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
