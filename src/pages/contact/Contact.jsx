import "./Contact.css";
import Contact_banner from "./contact_banner/Contact_banner";
import Contact_blog from "./contact_blog/Contact_blog";
import Facility from "..//shop/facility/Facility"

const Contact = () => {
  return (
    <div>
      <Contact_banner/>
      <Contact_blog/>   
      <Facility />
    </div>
  );
};

export default Contact;
