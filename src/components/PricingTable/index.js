import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import PricingItem from "./PricingItem";

import pricingTableData from "../../data/PricingTable/pricingTable";

const PricingTable = () => {
    return (
        <div className="pricing-plan-area sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle
                            title="Pricing Plan"
                            heading="Our Best <br>Suitable Prices"
                        />
                    </div>
                </div>

                <div className="row mtn-30">
                    {
                        pricingTableData.map(pricing=>(
                            <PricingItem
                                key={pricing.id}
                                cols="col-md-6 col-lg-4"
                                planName={pricing.planName}
                                currencyType={pricing.currencyType}
                                planPrice={pricing.planPrice}
                                subscribePlan={pricing.subscribePlan} 
                                planFeatures={pricing.planFeatures}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingTable;