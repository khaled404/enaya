import React from 'react';

const Experience = ({icon,designation,comment}) => {
    return (
        <div className="icon-box-item">
            <div className="icon-box__icon">
                <img src={require('../../assets/img/' + icon)} alt={designation}/>
            </div>
            <div className="icon-box__info">
                <h5>{designation}</h5>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Experience;