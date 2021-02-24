import React from 'react';
import FunfactItem from "./funfactItem";

import funfactbg from '../../assets/img/fun-fact-bg.jpg'
import Funfacts from '../../data/Funfact/funfact'

function Funfact() {
    return (
        <div className="fun-fact-area sm-top parallax" style={{backgroundImage: `url(${funfactbg})`}}>
            <div className="container">
                <div className="row mtn-40">
                    {
                        Funfacts.map(funfact=>(
                            <FunfactItem key={funfact.id} counterNumber={funfact.counterNumber} counterText={funfact.counterText} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Funfact;