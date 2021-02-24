import React from 'react';

const PageWrapper = ({classes,children}) => {
    return (
        <div className={`page-content-wrapper ${classes}`}>
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageWrapper;