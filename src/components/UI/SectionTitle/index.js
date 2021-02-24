import React from 'react';
import parse from 'html-react-parser'

function SectionTitle(props) {
    return (
        <div className={`section-title ${props.variant === "light" ? "section-title--light" : ""}`}>
            <h6>{props.title}</h6>
            <h2>{parse(props.heading)}</h2>
            {(() => {
                if (props.text) {
                    return <p>{parse(props.text)}</p>
                }
                if (props.tagline) {
                    return <h5 className="tagline">{parse(props.tagline)}</h5>
                }
            })()}
        </div>
    );
}

export default SectionTitle;