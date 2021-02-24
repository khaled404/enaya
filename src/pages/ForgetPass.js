import React, { Fragment } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import FormInput from '../components/UI/Input'
import FormHeader from '../templates/Contact/FormHeader'




const ForgetPass = () => {

    return(
        <Fragment>
            <Header />
            <section className="forget-pass-page text-center">
                <div className="container">
                    <FormHeader title="Forgot your password ?" text="3 easy steps to reset your password, and enjoy your enaya account " />
                    <form id="forget-form">
                    <FormInput
                        tag={'input'}
                        type={'email'}
                        name={'phone'}
                        placeholder={'Enter Your Email'}
                    />
                    <FormInput
                        tag={'input'}
                        type={'submit'}
                        name={'submit'}
                        val={'Send Login Link'} 
                    /> 
                    </form>
                </div>
            </section>
            <Footer />
            <MobileMenu />
        </Fragment>
    )
}

export default ForgetPass;