import React from 'react';
import FormInput from "../../components/UI/Input";

const From = () => {
    return (
        <div className="contact-form-wrap">
            <form id="contact-form">
                <div className="row">
                    <div className="col-md-4">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'full_name'}
                            placeholder={'Enter Your Name *'}
                        />
                    </div>

                    <div className="col-md-4">
                        <FormInput
                            tag={'input'}
                            type={'phone'}
                            name={'phone'}
                            placeholder={'Your Phone *'}
                        />
                    </div>

                    <div className="col-md-4">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'subject'}
                            placeholder={'Subject *'}
                        />
                    </div>

                    {/* <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'phone_no'}
                            placeholder={'Phone No'}
                        />
                    </div> */}

                    <div className="col-12">
                        <FormInput
                            tag={'textarea'}
                            name={'con_message'}
                            placeholder={'Your Message Here *'}
                        />

                        <FormInput
                            tag={'button'}
                            classes={'btn-outline'}
                        />

                        <div className="form-message"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default From;