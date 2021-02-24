import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import BookHeader from '../assets/img/booking-bg.png'
import Done from '../assets/img/done.png'
import MobileMenu from '../components/MobileMenu'

const CompleteBook = () => {

    const name = localStorage.getItem("DocName");
    const img = localStorage.getItem("Docimg");
    const price = localStorage.getItem("DocPrice");

    return(
        <Fragment>
            <Header />
            <PageHeader title="Booking" bgImg={BookHeader} content="Book an appointment for yourself Or for others" color="white" />
            <section className="complete-book">
                <div className="container">
                    <div className="book-head text-center">
                        <img src={Done} alt="Done Booking"/>
                        <p className="title">You successfully booked your appointment with</p>
                    </div>
                    <div className="doc-box">
                        <div className="media">
                            <img src={img} className="align-self-start mr-3" alt={name}/>
                            <div className="media-body">
                                <h5 className="name">Dr. {name}</h5>
                                <div className="doc-spec">Arthroscopy and Sports injuries  .  <span className="price">Fees: {price} EGP</span></div>
                                <div className="book-info">
                                    <h4 className="title">Booked</h4>
                                    <div className="book-detail">
                                        <div className="date">
                                            <h6 className="title">Dates</h6>
                                            <p className="text">25 / 9 / 2020</p>
                                        </div>
                                        <div className="time">
                                            <h6 className="title">Time</h6>
                                            <p className="text">8:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            <Footer />
            <MobileMenu />
        </Fragment>
    )

}

export default CompleteBook;