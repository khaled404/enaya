import React from 'react';

const PageHeader = ({bgImg,title,content,color}) => {
    return (
        <div className="page-header-area bg-img" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="text-left">
                        <div className="page-header-content-inner">
                            <div className="page-header-content">
                                <h2 style={{color: (color === 'white') ? "#FFF" : "#0F2035"}}>{title}</h2>
                                <p style={{color: (color === 'white') ? "#FFF" : "#0F2035"}}>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;