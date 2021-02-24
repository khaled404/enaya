import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivacyImg from "../assets/img/pageHeader/about-header.png"
import PageHeader from '../components/PageHeader'
import PageContnet from '../components/PageContent'
import MobileMenu from '../components/MobileMenu'

const Terms = () => {

    return(
        <Fragment>
            <Header />
            <PageHeader title="TERMS OF USE" bgImg={PrivacyImg}  color="dark" />
            <PageContnet subtitle="Enaya" title="WEBSITE TERMS OF USE" content={
            <div className="content">
                <p>
                    Thank you for using our services. To govern the relationship established by your use of Enaya.com
                    (“Site”), or our application Enaya, (“Application”) and the Services offered by Enaya therein, these
                    Terms of Use (“Terms”) constitute a legally binding agreement made between you, either in your capacity
                    as an individual or on behalf of an organization or entity you legally represent (“you,” “your”, “yours”),
                    and Enaya LLC, the owner and operator of Enaya (‘Enaya”, “us”, “our”). These Terms apply to all users of 
                    the site, including without limitation browsers, vendors, customers, providers, and/or contributors of content 
                    (“Users”). You understand that Enaya or any of Enaya’s affiliates reserves the right to limit or discontinue your
                    use of the online services if you do not abide by these Terms or at the sole discretion of Enaya. By accessing or
                    using any part of the Site or Application, you agree that you have read, understand and agree to be bound by these
                    Terms, as well as additional available guidelines, policies, or rules as applicable to the Site and Application,
                    including, without limitation, the Enaya Privacy Policy, which are incorporated by reference into this Terms.
                    IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS AND TO FOLLOW ALL APPLICABLE LAWS, GUIDELINES AND POLICIES,
                    DO NOT ACCESS OR USE THE SITE. 
                </p>
                <ul>
                    <li>
                        <h3>1. NATURE OF THE CONTENT APPEARING ON OUR SERVICES</h3>
                        <ul className="second">
                            <li>1.1 OVERVIEW Our Services may include text, data, graphics, images, or other content (collectively, “Content”) created by us or third parties, including health care providers and partners such as physicians, hospitals, polyclinics, laboratories, scan centers and pharmacies</li>
                            <li>1.2 OUR SERVICES Our services include this Site and an application which allows users to book healthcare providers including clinics, hospitals, or diagnostic labs for both physical and remote consultations and services. Our Public and Protected Services are collectively referred to as the “Services”. In other words, our Services are only intended to help you search and book an appointment with a Provider. You acknowledge that some of the Services are made available under various names currently referred to as "V-Book" "V-Offers," and "V-Aman". You also acknowledge that the Services may be made available under (i) certain Enaya subsidiaries and affiliates or (ii) independent Providers.</li>
                            <li>1.2.1 Public Services We make some Services available without registering or obtaining a password. We call these “Public Services.” You may make personal, non-commercial use of the Public Services so long as you comply with these Terms. These Services include directories (“Directories”) for physicians, medical consultants, and laboratory and scan centers’ branches, collectively (“Providers”). The Directories are provided for your convenience. The Directories only include Providers who use our Services and who have chosen to participate in the Directories. The listing of a Provider within the Directories does not constitute a recommendation for the services of such Provider or a warranty of the certifications or qualifications of such Provider. As all information is relayed as submitted by the Providers, and while we make reasonable efforts to provide you with accurate content, we do not guarantee, represent, nor warrant, whether expressed or implied, the accuracy of any information with respect to professional qualifications, expertise, quality of work, price or cost information, insurance, or any other content available through the services. In no event shall we be liable to you or anyone else for any decision made or action taken by you in reliance on any such content. We do not in any way endorse or recommend any individual or entity listed or accessible through the services. While bookings may be made through our site, we cannot guarantee the availability of the relevant Provider, nor can we foresee appointment cancellations.</li>
                            <li>1.2.2 Protected Services Some of our Services are protected by technical measures intended to safeguard the confidentiality, integrity and accessibility of sensitive information our Users store and share using our Services. We call these “Protected Services.” One such safeguard is requiring each User to be properly authenticated by means of authorization (“Credentials”), such as unique identifiers, usernames, passwords, and the like. In order to obtain Credentials, you must provide certain information about yourself. If you are registering for a Protected Service, or accessing or using, or attempting to access or use, a Protected Service on behalf of, or for the benefit of, someone other than yourself – such as any of your family members (each, a “Principal”) – you must also identify and provide information about each Principal. Further terms and conditions related to User Registration are highlighted in Section ‎6. These Protected Services are all Services that build you a personal Medical Record (“Medical Record”), such as receiving your medical information and results from Providers like laboratories, scan centers and physicians’ accounts. This data is completely private and secured and we hereby guarantee so. You are the owner of the data and by clicking “I agree”, you give the Providers the right to send you the information through your private account on the Site. In order to help you build your own electronic Medical Record, you may agree to send a copy of this data to the supplier doctor through our Services, which will be protected and kept private as well and cannot be shared with third parties. The supplier doctor will keep it under your name on his account for building your Medical Record at the clinic. In case you do not agree to keep a Medical Record of your data, you can send Enaya your request expressing your desire not to share, and Enaya shall comply with this request.</li>
                            <li>1.3 CONTENT Our Services allow you to access reviews and other forums where various Users can share information, opinions, ratings and other Content. We generally do not pre-screen or monitor submitted Content, and such Content may simply represent a user’s opinion. Our Services may also include survey results, ratings or testimonials (“Evaluations”) from users that may endorse, recommend, critique, analyze, evaluate or otherwise describe the Providers and the nature or quality of the Services received by such user. Such Evaluations are anecdotal first-hand accounts of individual Users, and do not constitute neither a Provider’s judgment nor the product of medical science. You should understand that the Evaluations expressed therein are of those who provide the same, that it does not reflect the opinions of Enaya, and does not in any way constitute or imply our endorsement or recommendation thereof. Thus, Enaya shall not assume any liability for any of the posted Evaluations. Further, you should bear in mind that Evaluations are subject to errors and biases that are common in anecdotal first- hand accounts, and should not to be presumed to be reliable or error-free. Any Content that you obtain or receive from Enaya, its employees, contractors, partners, sponsors, advertisers, licensors or otherwise through the Services, is for informational, scheduling and payment purposes only. All information is for informational purposes only, and does not constitute medical advice. The information offered on the Site is not a substitute for medical advice from qualified healthcare professionals. If you rely on any Content, including reviews, you do so solely at your own risk. We encourage you to independently confirm any Content relevant to you with other sources, including the Healthcare Provider’s office, medical associations relevant to the applicable specialty, your state medical boards, and the appropriate licensing or certification authorities to verify listed credentials and education.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>2. PRIVACY AND SECURITY POLICY</h3>
                        <ul className="second">
                            <li>2.1 Enaya and its affiliates consider the privacy of your health information to be one of the most important elements in our relationship with you. Our responsibility to maintain the confidentiality of your health information is one that we take very seriously. We are required by law to maintain the privacy and security of your protected health information. We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information. We will not use or share your information other than as described here. You are the owner of the data and you share it when you need through our Site.</li>
                            <li>
                                2.2 To further protect the confidentiality, integrity and availability of the information housed and shared on Enaya, as well as the stability of our Services, you agree to the following additional safeguards. Accordingly, you agree that you will not, nor will you attempt to:.
                                <ul className="third">
                                    <li>Access, use or disseminate our Services, nor any information or files accessible via our Services, in a manner that violates any applicable law or regulation or the rights of any individual or entity;</li>
                                    <li>Sell or transfer any information included in our Services or use such information to market any product or service – including by sending, or facilitating the sending of, unsolicited emails or SPAM; </li>
                                    <li>Probe, scan or test the vulnerability of our Services, or of the system or network supporting our Services, or circumvent any security or authentication measures; </li>
                                    <li>Disable, bypass, defeat, avoid, remove, deactivate or otherwise circumvent any technical measures we have implemented to safeguard the stability of our Services, or the confidentiality, integrity or availability of any information, content or data hosted or housed on our Services; </li>
                                    <li>Introduce to our Services any software, code or other device that in any way (i) permits unauthorized access to our systems or any software, hardware, files or data located thereon, (ii) disables or damages or otherwise interferes with or adversely affects the operation of our systems or any software, hardware, files or data located thereon, or (iii) overburdens or interferes with the proper functioning of our Services; </li>
                                    <li>Disassemble, decompile or reverse engineer our Services;</li>
                                    <li>harvest, retrieve, index or publish any portion of our Services unless you are a public search engine engaging in public search services; </li>
                                    <li>Disable or circumvent our API usage safeguards, including safeguards designed to regulate the nature or amount of data you are permitted to extract from our Services, or the frequency of which you may access such data; or make calls to our API other than those authorized in our API documentation; </li>
                                    <li>Remove any copyright, trademark or other proprietary rights notices contained in or on our Services; or</li>
                                    <li>Engage in any activity other than those expressly permitted in these Terms. Further information regarding our privacy measures can be found in our Privacy Policy.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>3. PAYMENT</h3>
                        <ul className="second">
                            <li>3.1 Payment Collection</li>
                            <li>3.1.1 You may choose either (i) to pay in cash at the Provider’s location at the time of the consultation or (ii) to pay online through our Site or Application. When we collect amounts on behalf of third-party providers, you explicitly agree to adhere to the payment terms of such Provider. Where applicable, we will include any inclusive taxes. We currently accept payment through credit/debit cards, Fawry, and digital wallets. You agree to make all such payments in a timely manner, and acknowledge that you are responsible for any amounts wed to your account. Depending on the Service, we will collect payment before or after the Service is provided.</li>
                            <li>3.1.2 We reserve the right to establish, amend, or remove any charges, subject to our sole discretion. We may further offer promotions or discounts, which will alter the amount charged, but only subject to the terms and conditions of such promotion or discount.</li>
                            <li>3.2 Refund Policy</li>
                            <li>3.1 Charges paid by you are final and non-refundable, unless otherwise determined by Enaya.</li>
                            <li>3.2 The refund will be made on the same payment method, if applicable.</li>
                            <li>3.3 Enaya reserves its right to refund any amounts into the users account to be used in other services at its sole discretion.</li>
                            <li>3.4 Refunds are not applicable if the User is unsatisfied with the medical service provided.</li>
                            <li>3.5 A User will be entitled to a full refund if:</li>
                            <li>3.5.1. The User cancelled the reservation prior to the appointment time;</li>
                            <li>3.5.2. The Provider cancelled, or did not show-up to, the appointment for which payment was made by the User;</li>
                            <li>3.5.3. For telehealth services, the Provider did not answer the call;</li>
                            <li>3.5.4. For telehealth services, the call was not initiated due to technical reasons;</li>
                            <li>3.5.5. For telehealth services, the User did not answer the call;</li>
                            <li>3.5.6. For telehealth services, a User will not be entitled to receive a refund if the call was interrupted. In this case, the User will be offered another booking with the same Provider to complete the appointment.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>4. COMPLIANCE</h3>
                        <ul className="second">
                            <li>4.1 You must comply with these Terms, any policies referred to on the Site, any laws, regulations, rules, License or Restrictions approved by Enaya</li>
                        </ul>
                    </li>
                    <li>
                        <h3>5. LICENSE</h3>
                        <ul className="second">
                            <li>5.1 Subject to these Terms, you are hereby granted a limited, revocable, non-exclusive right to use the Services, Content and materials on the Site in the normal course of your use of the Site. You may not use any third party’s intellectual property without the express written permission of the such third party.</li>
                            <li>5.2 Enaya will retain ownership of its intellectual property rights and you may not obtain any rights therein by virtue of these Terms or otherwise, except as expressly set forth in these Terms. You will have no right to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit or sublicense from materials or content available on the Site, than as may be reasonably necessary to use the Services for their intended purpose and except as expressly set forth in these Terms.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>6. USER REGISTRATION</h3>
                        <ul className="second">
                            <li>6.1 You do not have to register in order to visit the Site. To access certain features of the Services, you will need to register with Enaya and create a (“User Account”) through the online registration process on the Site. Your account gives you access to the Services and functionality that we may establish and maintain from time to time and in our sole discretion. When creating an account, you must provide Enaya with accurate and complete registration information, as prompted in the registration form. You must promptly notify Enaya if any of this information changes. If you fail to provide or update this information, you will not be able to receive the requested information through the Site. Enaya will also have the right to terminate or hinder your use of the Services.</li>
                            <li>6.2 By creating an account, you are asked to explicitly agree to these Terms. You further acknowledge that you must be over the age of 18 to utilize our Services, and that we do not take accountability for the use of our services if you are under the age of 18 </li>
                            <li>6.3 You must choose a password to access your user account and must keep it confidential at all times. You further understand that you will be responsible for any actions/activities made on your user account by unauthorized third parties. You must notify us if you strongly believe your account have been hacked. Under no circumstances should you respond to a request for your password, particularly a request from someone claiming to be an employee of Enaya. You shall not authorize, assign or transfer your user account to third parties. You understand that you will be denied access to your account if you failed to enter your password for 2 consecutive times.</li>
                            <li>6.4 By accessing and using our Services, you consent to our using your email address to send you service-related, change of features or special offers notices including any notices required by law, in lieu of communication by postal mail.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>7. ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h3>
                        <ul className="second">
                            <li>7.1 We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.</li>
                            <li>7.2 This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>8. OPTIONAL TOOLS</h3>
                        <ul className="second">
                            <li>8.1 We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</li>
                            <li>8.2 You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</li>
                            <li>8.3 Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</li>
                            <li>8.4 We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>9. THIRD-PARTY LINKS</h3>
                        <ul className="second">
                            <li>9.1 Certain content, products and services available via our website may include materials from third parties. Third-party links on this site may direct you to third-</li>
                            <li>9.2 party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</li>
                            <li>9.3 We are not liable for any harm or damages related to the use of services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>10. USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h3>
                        <ul className="second">
                            <li>10.1 If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.  </li>
                            <li>10.2 We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Use.</li>
                            <li>10.3 You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>11. ERRORS, INACCURACIES AND OMISSIONS</h3>
                        <ul className="second">
                            <li>11.1 Occasionally there may be information on our site that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>12. PROHIBITED USES</h3>
                        <ul className="second">
                            <li>12.1 In addition to other prohibitions as set forth in these Terms, you are prohibited from using the site or our application or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>13. DISCLAIMER OF WARRANTIES and LIMITATION OF LIABILITY</h3>
                        <ul className="second">
                            <li>13.1 We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. While we always strive to ensure that our Providers are duly licensed in the relevant jurisdiction, we do not guarantee that our content is always free of error, complete, accurate or updated.</li>
                            <li>13.2 We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</li>
                            <li>13.3 You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.</li>
                            <li>13.4 You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the Service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</li>
                            <li>13.5 In no case shall we, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the Services or any products procured using the Service or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, any diagnoses, medical advice, prescriptions, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility</li>
                            <li>13.6 Enaya will assume no liability for damages caused to you including and without limitation, direct, indirect, special, consequential, punitive or incidental damages, arising out of, or in connection with any of the following acts committed by Providers:
                                <ul className="third">
                                    <li>The failure to deliver proper bedside manners;</li>
                                    <li>Unprofessional, unethical or dishonorable conduct;</li>
                                    <li>Wrong or delayed diagnosis of a medical condition</li>
                                    <li>Incorrect treatment, delayed treatment, or no treatment at all;</li>
                                    <li>Medical malpractice or negligence;</li>
                                    <li>The cancellation of the appointment, the lateness of the Provider, or the no-show at all at the examination appointment</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            WE DO NOT OFFER MEDICAL ADVICE, DIAGNOSIS OR TREATMENT. WE DO NOT ENDORSE NOR RECOMMEND YOU A SPECIFIC PROVIDER.
                            WE DO NOT AND DO NOT INTEND TO PRACTICE MEDICINE. WE ONLY HELP YOU SEARCH AND BOOK THE BEST PROVIDER ACCORDING 
                            TO YOUR MEDICAL NEEDS. THEREFORE, IT IS CRUCIAL THAT YOU EMPLOY THE SAME CAUTIOUSNESS AND PRUDENCE YOU WOULD HAVE
                            EMPLOYED WITHOUT USING OUR SERVICES. YOU UNDERSTAND AND ACKNOWLEDGE THAT ENAYA WILL NOT BE HELD ACCOUNTABLE NOR LIABLE
                            FOR ANY DAMAGES, DEATH, INJURIES, CONTRACTED ILLNESS, LOSSES, COSTS OR EXPENSES OF WHATEVER NATURE CAUSED BY THE PROVIDER.
                        </p>
                    </li>
                    <li>
                        <h3>14. AMENDMENT</h3>
                        <ul className="second">
                            <li>14.1 Internet technology and applicable laws, rules and regulations change frequently. Accordingly, Enaya reserves the right to make changes to this Terms at any time. Your continued use of the Site constitutes assent to any new or modified provision of these Terms that may be posted on the Site. We will post the amended Terms on this page and indicate at the top of the page the date these Terms were last revised.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>15. CHOICE OF LAW</h3>
                        <ul className="second">
                            <li>15.1 These Terms and all suits and proceedings hereunder shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. You further expressly and irrevocably submit to the exclusive jurisdiction of the courts of Cairo, Egypt and waive any claims of inconvenient forum or venue.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>16. MISCELLANEOUS</h3>
                        <ul className="second">
                            <li>16.1 You understand that your account or usage of the Site/Application may be deactivated or terminated upon your request or at the discretion of Enaya or any of Enaya’s affiliates for failure to meet these Terms.</li>
                            <li>16.2 We may freely assign these Terms in connection with a merger, acquisition, or sale of assets, or by operation of law or for any reason otherwise.</li>
                            <li>16.3 In the event that any provision of these Terms are determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</li>
                            <li>16.4 The failure of us to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</li>
                            <li>16.5 These Terms, together with the End User Agreement and the Privacy Policy, constitute the entire agreement between you and Enaya regarding any Services we provide, and supersede all previous communications, representations, or understandings, either oral or written, relating to the subject matter.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        } />
            {
                
            }
            <Footer />
            <MobileMenu />
        </Fragment>
    )
}

export default Terms;