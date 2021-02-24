import React,{Fragment} from 'react';
import socialNetworks from '../../data/SocialNetworks/socials'

const ContactInfo = ({address}) => {
    return (
        <Fragment>
            <div className="widget-item m-0">
                <address>
                    <span dangerouslySetInnerHTML={{__html: address}}/> 
                </address>
            </div>
            <div className="member-social-icons mt-30">
                {
                    socialNetworks.map(social=>(
                        <a key={social.id} href={`https://${social.networkName}.com/${social.username}`} target="_blank" rel="noopener noreferrer">
                            <i className={`fa fa-${social.networkName}`}/>
                        </a>
                    ))
                }
            </div>
        </Fragment>
    );
};

export default ContactInfo;