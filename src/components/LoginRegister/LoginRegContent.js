import React, {Fragment} from 'react';
import socialNetworks from "../../data/SocialNetworks/socials";

const LoginRegister = () => {
    return (
        <Fragment>
            <div className="off-canvas-item">
                <div className="log-in-content-wrap">
                    <h2>Login</h2>
                    <div className="login-form mtn-15">
                        <form action="#" method="post">
                            <div className="form-input-item">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input type="text" id="username" placeholder="Username" required/>
                            </div>

                            <div className="form-input-item">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input type="password" id="password" placeholder="Password" required/>
                            </div>

                            <div className="form-input-item">
                                <button type="submit" className="btn-submit">Login</button>
                            </div>
                        </form>
                    </div>

                    <div className="sign-up-notification">
                        <p>Not Resisted? <a href="/">Create Account Now.</a></p>
                    </div>
                </div>
            </div>

            <div className="off-canvas-item mt-sm-30">
                <div className="social-icons">
                    {
                        socialNetworks.map(social=>(
                            <a key={social.id} href={`https://${social.networkName}.com/${social.username}`} target="_blank" rel="noopener noreferrer">
                                <i className={`fa fa-${social.networkName}`}/>
                            </a>
                        ))
                    }
                </div>
                <div className="copyright-content">
                    <p> © Businex {new Date().getFullYear()} All Right Reserved.</p>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginRegister;