import React from 'react';
import quoteIcon from '../../../assets/img/icons/quote.png'

function TestimonialItem(props) {
    return (
        <div className="testimonial-item testimonial-item--3">
            <div className="testimonial-thumb">
                <img src={require('../../../assets/img/' + props.authorThumb)} alt="Businex"/>
            </div>

            <div className="testimonial-txt">
                <img src={quoteIcon} alt="Businex"/>
                <p>{props.quote}</p>
                <h5 className="client-name">{props.author}</h5>
            </div>
        </div>
    );
}

export default TestimonialItem;