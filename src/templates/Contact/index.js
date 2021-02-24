import React from 'react';
import From from "./From";
import ContactInfo from "./ContactInfo";
import ContactForm from '../../components/Forms/ContactForm';

const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper'}>
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-lg-9">
                            <div className="contact-form-area contact-method">
                                {/* <From/> */}
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;