import React from 'react';

function HeaderConfig(props) {
    // const LoginRegHandler = () => {
    //     const offCanvasConfig = document.querySelector('.off-canvas-cog');
    //     offCanvasConfig.classList.add('active');
    //     document.querySelector('body').classList.add('fix');
    // }

    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <button className="btn-menu d-lg-none" onClick={MobileMenuHandler}><i className="fa fa-bars"/></button>
    );
}

export default HeaderConfig;