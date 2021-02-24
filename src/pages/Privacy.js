import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivacyImg from "../assets/img/pageHeader/about-header.png"
import PageHeader from '../components/PageHeader'
import PageContnet from '../components/PageContent'
import MobileMenu from '../components/MobileMenu'

const Privacy = () => {

    return(
        <Fragment>
            <Header />
            <PageHeader title="Privacy Policy" bgImg={PrivacyImg}  color="dark" />
            <PageContnet subtitle="Enaya" title="Privacy Policy" content={
                <div className="content">
                    <p>
                        Thank you for using Enaya. Your trust is important to us and we are committed to protecting 
                        the privacy and security of your personal information. The information you shared with us helps
                        us to provide a great experience with Enaya. This Privacy Policy describes our privacy practices 
                        for all Services we offer worldwide. The term “Enaya”, “us” or “we” refer to Enaya LLC and the term “User”,
                        “you”, “yours” refer to yourself as the User of Enaya’s Services This Privacy Policy, together with the Terms
                        of Use, set forth the general rules and policies governing your use of our platform. Depending on your activities
                        when visiting our platform, you may be required to agree to additional terms and conditions
                    </p>
                    <ul>
                        <li>
                            <h3>1. Information We Collect </h3>
                            <ul className="second">
                                <li>1.1. Enaya is committed to maintaining privacy protections for its Users. Our Privacy Policy is designated to help you understand how we collect, use and safeguard the information you provide to us. When you visit Enaya, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or doctors that you view, what websites or search terms referred you to Enaya, and information about how you interact with Enaya</li>
                                <li>1.2. We also collect information from you when you register on Enaya’s Website, book a doctor’s appointment or subscribe to our newsletter. When booking or registering on our Website, as appropriate, you may be asked to enter your name, e-mail address, mailing address, phone number, and date of birth (“Personal Information”).</li>
                                <li>1.3. We may also request that you provide us with information to collect payment from your credit or debit card. After a transaction, this private information (credit cards, social security numbers, financial data, etc.) will not be stored on our servers.</li>
                                <li>1.4. You may request that we delete this information at any time, or unsubscribe from emails through your account settings or by following the detailed instructions at the bottom of each email.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>2. How We Use Your Data </h3>
                            <ul className="second">
                                <li>2.1 We use some of the information we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize Enaya (for example, by generating analytics about how our customers browse and interact with the site or application, and to assess the success of our marketing and advertising campaigns).</li>
                                <li>2.2 We use the Personal Information that we collect generally to fulfill any bookings made through Enaya, to communicate with you, screen for potential risk or fraud; and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>3. Protecting Your information </h3>
                            <ul className="second">
                                <li>3.1 We strive to protect your information using international protection standards and implement a variety of security measures to maintain the safety of your personal information when you place a booking or enter, submit, or access your personal information.</li>
                                <li>3.2 We scan our website and application regularly for security holes and vulnerabilities to ensure your visit to our site is as a secure as possible. We protect our website through a Web Application Firewall, which filters and monitors the traffic between a web-application and the internet. It detects and blocks common application layer vulnerabilities at the network edge.</li>
                                <li>3.3 We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment Gateway Providers’ database only to be accessible by those authorized with special access rights to such systems and are required to keep the information confidential.</li>
                                <li>3.4 We store our data with external provider that holds industry-recognized certifications and audits, including PCI DSS Level 1, ISO 27001, FISMA Moderate, FedRAMP, HIPAA, and SOC 1 (formerly referred to as SAS 70 and/or SSAE 16) and SOC 2 audit reports.</li>
                                <li>3.5 We also ensure all of our data is password protected, and enabled with multi-factor authentication. Not every member of the Enaya team is able to access any data collected, only those with specific roles are permitted to view the data collected. When we store your data on our servers, we pseudonymize and encrypt it to maintain anonymity and provide an additional layer of security in case of a data breach.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>4. How Long We Keep Your Data </h3>
                            <ul className="second">
                                <li>4.1 The criteria used to determine the period of storage of personal data is the respective statutory retention period. After the expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfillment of our services.</li>
                                <li>4.2 We process and store your personal data only for the period necessary to achieve the purpose of storage. Accordingly, if we have your email address because we provide certain services to you, we keep that email address throughout the time we provide those services to you.</li>
                                <li>4.3 Essentially, we maintain your data until the deletion of your account. You can view the data we collect from you at any time, and may request its deletion at any time through your account settings.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>5. Cookie Usage Policy </h3>
                            <ul className="second">
                                <li>5.1 Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the Website or the service providers’ systems to recognize your browser, capture and remember certain information.</li>
                                <li>5.2 We use cookies to enhance your experience, for analytics, and to show you offers tailored to your previous visits to our website. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</li>
                                <li>5.3 If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>6. Non-Disclosure of Information to Third Parties </h3>
                            <ul className="second">
                                <li>6.1 We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our Website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, to enforce our Website’s policies, or protect our rights or others’ rights, property, or safety. However, non-personally identifiable visitor’s information may be provided to other parties for marketing, advertising, or other uses.</li>
                                <li>6.2 All payment details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties</li>
                            </ul>
                        </li>
                        <li>
                            <h3>7. Disclosure Regarding Google Display Advertising:  </h3>
                            <ul className="second">
                                <li>7.1 We implement Google Analytics features that use Display Advertising information for Google Analytics Demographics and Interest Reporting.</li>
                                <li>7.2 You may opt-out of Google Analytics for Display Advertising, to prevent your data from being used by Google Analytics, by going to the Google Analytics opt-out page.</li>
                                <li>7.3 We, along with third-party vendors (including Google), use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookies) to report how your ad impressions, other uses of ad services, and interactions with these ad impressions and ad services are related to visits to our Website. You can read more about the cookies used by Google Analytics advertising features, by going to the Google Analytics Privacy Policy page.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>8. Third-Party Links </h3>
                            <ul className="second">
                                <li>8.1 We may include or offer third party products or services on our Website. These third parties’ sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our Website and welcome any feedback about these sites. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>9. Your Rights </h3>
                            <ul className="second">
                                <li>9.1 You have the right granted to obtain from us the confirmation as to whether or not personal data concerning you is being processed. You can contact us at any time to claim this right.</li>
                                <li>9.2 You have the right to request the information that is currently being processed by us. You can also ask us for the purposes of the processing, the categories of personal data concerned; the recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organizations; where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period; the existence of the right to request from the controller rectification or erasure of personal data, or restriction of processing of personal data concerning the data subject, or to object to such processing; the existence of the right to lodge a complaint with a supervisory authority; where the personal data are not collected from the data subject, any available information as to their source.</li>
                                <li>9.3 You have the right to let us know when your information changes, and the information we have on file is no longer accurate. Considering the purposes of the processing, you shall have the right to have incomplete personal data completed, including using providing a supplementary statement.</li>
                                <li>9.4 You have the right to request the erasure of personal data without undue delay.</li>
                                <li>9.5 You shall have the right to receive the personal data concerning you, which was provided to a controller, in a structured, commonly used and machine-readable format.</li>
                                <li>9.6 You shall have the right to object at any time to processing of personal data concerning you. We shall no longer process the personal data in the event of the objection, unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights and freedoms of you, or for the establishment, exercise or defense of legal claims.</li>
                                <li>9.7 You have the right to withdraw your consent to processing of your personal data at any time.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>10. Terms of Use </h3>
                            <ul className="second">
                                <li>10.1 Please visit our Terms of Use establishing the use, disclaimers, and limitations of liability governing the use of our Website at www.Enaya.com</li>
                            </ul>
                        </li>
                        <li>
                            <h3>11. Your Consent </h3>
                            <ul className="second">
                                <li>11.1 By using our Website, you consent to our Privacy Policy.</li>
                                <li>11.2 The Website’s Terms of Use and Privacy Policy may be changed or updated occasionally to meet legal requirements and standards. Therefore, you are encouraged to frequently visit these sections in order to be updated about the changes on the Website. Modifications will be effective on the day they are posted</li>
                            </ul>
                        </li>
                        <li>
                            <h3>12. Contacting Us </h3>
                            <ul className="second">
                                <li>If there are any questions regarding this Privacy Policy, you may contact us using the email <a href="mailto:support@enaya.life">support@enaya.life</a> ,<a href="mailto:info@enaya.life">Info@enaya.life</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            } />
            <Footer />
            <MobileMenu />
        </Fragment>
    )
}

export default Privacy;