import React from 'react';

const Timeline = ({degree,duration,institute,comment}) => {
    return (
        <div className="cd-timeline-block">
            <div className="cd-timeline-img">
                <span className="dot"/>
            </div>

            <div className="cd-timeline-content">
                <div className="cd-heading">
                    <h5>{degree}</h5>
                    <p>{duration} | <span>{institute}</span></p>
                </div>
                <p className="cd-description">{comment}</p>
            </div>
        </div>
    );
};

export default Timeline;