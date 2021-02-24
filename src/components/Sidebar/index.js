import React from 'react';
import Ads from '../../assets/img/ads.png'
const Sidebar = ({classes,children}) => {
    return (
        <div className={classes}>
                <div className="side-ads-box">
                    <div className="card h-100">
                    <img src={Ads} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    </div>
                </div>
                <div className="side-ads-box mt-3">
                    <div className="card h-100">
                    <img src={Ads} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Sidebar;