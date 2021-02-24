import React from 'react'


const PageContnet = (props) => {

    return(
        <section className="pagecontent">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-3">
                        <div className="shap-box"></div>
                    </div>
                    <div className="col-md-9">
                        <div className="box-content">
                            <h4 className="sub-head hover-color">{props.subtitle}</h4>
                            <h2 className="content-head">{props.title}</h2>
                            <div className="text">{props.content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PageContnet;