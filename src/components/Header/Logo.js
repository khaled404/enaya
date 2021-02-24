import React, {Component} from 'react';
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <Link to={`${process.env.PUBLIC_URL + "/"}`} ><img src={logo} alt="Enaya-Logo" /></Link>
            </div>
        );
    }
}

export default Logo;