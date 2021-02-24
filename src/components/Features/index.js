import React from 'react';
import Feature from './FeatureItem'
import FeaturesData from '../../data/Features/features'

function Features({classes}) {
    return (
        <div className={`feature-area-wrapper ${classes}`}>
            <div className="container">
                <div className="row mtn-sm-60 mtn-md-5">
                    {
                        FeaturesData.map(feature=>(
                            <Feature key={feature.id} title={feature.title} text={feature.text} img={feature.imgSrc} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Features;