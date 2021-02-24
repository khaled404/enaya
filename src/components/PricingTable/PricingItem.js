import React from 'react';
import List from "../UI/List";
import LI from "../UI/List/Item"

const PricingItem = ({cols,planName,currencyType,planPrice,subscribePlan,planFeatures}) => {
    return (
        <div className={cols}>
            <div className="pricing-plan-item">
                <div className="pricing-plan-header">
                    <h6 className="plan-name">{planName}</h6>
                    <div className="plan-price">
                        <span className="dollar">{currencyType}</span>
                        <span className="price">{planPrice}</span>
                        <span className="price-type">/ {subscribePlan}</span>
                    </div>
                </div>
                <div className="pricing-plan-body">
                    <List classes="price-list">
                        {
                            planFeatures.map((feature,indx)=>(
                                <LI key={indx}>{feature}</LI>
                            ))
                        }
                    </List>
                </div>
                <div className="pricing-plan-footer">
                    <a href="/" className="btn-outline">Sign Up Today</a>
                </div>
            </div>
        </div>
    );
};

export default PricingItem;