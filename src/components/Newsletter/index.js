import React from 'react';

const Newsletter = () => {
    return (
        <div className="sidebar-newsletter">
            <h3>Newsletter</h3>
            <form action="#" method="post">
                <input type="email" placeholder="Your Email Address"/>
                <button className="btn btn-brand">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;