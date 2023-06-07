import Sticker from "../Components/Cards/Sticker";
import ContactForm from "../Components/forms/ContactForm";

const Contact = () => {
    return (
        <div className="page contact" id="contact">
            <h3>Contact</h3>
            <div className="contact-content">
                <ContactForm />
                <Sticker scale="big"/>
            </div>
        </div>
    )
}

export default Contact;