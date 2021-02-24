import React,{Fragment} from 'react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import PageContnet from '../components/PageContent'
import Footer from '../components/Footer'
import AppHeader from "../assets/img/pageHeader/about-header.png"
import MobileMenu from '../components/MobileMenu'
const AboutUs = () => {

    return(
        <Fragment>
            <Header postion="contact"/>
            <PageHeader title="We care about you" bgImg={AppHeader} color="dark" />
            <PageContnet subtitle="Enaya" title="About Enaya" content={
                <div className="content">
                    <p>
                        Enaya Application From Roaya
                        In seeing many success stories we have achieved
                        We established, prepared and managed hundreds of hospitals in the region
                        Upper Egypt and we trained thousands of medical officials
                        A long communication bridge that we have built with our customers over the years is announced
                        Now is a roaya to offer you its medical expertise in Application enaya
                        The first healthcare application in Egypt, inclusive of all
                        The medical services you need for your health
                        With a roaya and care to develop the form of medical service in Egypt
                        With enaya App ... # your health is the origin of the story.
                    </p>
                    <p>
                        In a Roaya, what do we offer ?!
                        We provide many services to our clients in a vision through a business plan
                        A large and distinguished team of administrators, engineers, doctors, and
                        Designers to implement all construction phases of hospitals until the handover stage
                        Qualification of all hospital licenses
                        Organizing internal and external work in hospitals
                        Setting development, advertising and marketing plans for medical institutions
                        Develop programs for hospital management
                        Establish a monitoring and information technology system
                        Establish infection control and quality policy
                        Providing skilled medical staff for hospitals in all
                        Majors
                        What makes a vision for medical marketing and management
                        Hospitals ?!
                        In a vision, we are developing the form of our services and our plans to improve the workflow
                        And make the best care!
                        For our patients and their families
                        In our Roaya, we provide all the information you need about the service
                        Medical is very easy and cost-effective to suit your needs
                        Any impact on service quality
                    </p>
                </div>
            } />
            <Footer/>
            <MobileMenu />
        </Fragment>
    )

}

export default AboutUs;