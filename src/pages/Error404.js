import React from 'react';
import {Link} from "react-router-dom";
import error from '../assets/img/404.png'

const Error404 = () => {
    return (
        <div style={styles}>
            <div>
                <img src={error} alt="404"/>
                <Link to={`${process.env.PUBLIC_URL + "/"}`} className={'btn-brand'} style={{display: 'inline-Block', marginTop: 30}}>Go Back
                    Home</Link> 
            </div>
        </div>
    );
};

const styles = {
    maxWidth: 500,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: 30
};

export default Error404;