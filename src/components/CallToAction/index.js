import React from 'react';
import parse from 'html-react-parser'

import CallToActionData from '../../data/CallToAction/call-to-action'
import {Link} from "react-router-dom";

function CallToAction() {
    return (
        <div className="call-top-action-wrap sp-y">
            <div className="container">
                <div className="footer-top-content">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-lg-6">
                            <h2>{CallToActionData.title}</h2>
                            <p>{parse(CallToActionData.text)}</p>
                        </div>
                        <div className="col-md-4 col-lg-6 text-md-right mt-sm-25">
                            <Link to={`${process.env.PUBLIC_URL + CallToActionData.btnLink}`} className="btn-outline">{CallToActionData.btnText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;