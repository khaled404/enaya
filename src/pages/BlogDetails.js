import React,{Fragment} from 'react';
import Header from "../components/Header";
import BlogDetailsPage from "../templates/BlogDetails";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";

const PageBlog = () => {
    return (
        <Fragment>
            <Header/>
            <BlogDetailsPage sidebar={false}/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageBlog;