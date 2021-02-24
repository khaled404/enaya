import React from 'react'

const FormHeader = ({title, text}) => {

    return(
        <div className="form-header">
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
        </div>
    )

}

export default FormHeader;