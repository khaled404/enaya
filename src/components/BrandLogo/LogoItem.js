import React from 'react';
import {Link} from "react-router-dom";

function LogoItem(props) {
    return (
        <div className="brand-logo-item">
            <Link to={`${process.env.PUBLIC_URL + props.URL}`}>
                <img src={require('../../assets/img/' + props.logoSrc)} alt="Businex-Logo"/>
            </Link>
        </div>
    );
}

export default LogoItem;