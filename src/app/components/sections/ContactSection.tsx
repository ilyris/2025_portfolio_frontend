import SectionHeadingContainer from "../global/SectionHeadingContainer";
import ContactForm from "../forms/ContactForm";

const ContactSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden container mx-auto">
      <SectionHeadingContainer title={"Let's Talk"} />
      <div className="w-5/6 m-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
