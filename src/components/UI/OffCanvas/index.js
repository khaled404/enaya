import React from 'react';
import closeIcon from '../../../assets/img/icons/cancel.png'

const OffCanvas = ({type, children}) => {

    const LoginRegClose = () => {
        const canvasWrapper = document.querySelector('.off-canvas-cog');
        canvasWrapper.classList.remove('active');
        document.querySelector('body').classList.remove('fix');
    }

    const MobileMenuClose = () => {
        const canvasWrapper = document.querySelector('.off-canvas-menu');
        canvasWrapper.classList.remove('active');
        document.querySelector('body').classList.remove('fix');
    }

    return (
        <aside className={`off-canvas-wrapper off-canvas-${type}`}>
            <div onClick={type === 'cog' ? LoginRegClose : MobileMenuClose} className="off-canvas-overlay"/>
            <div className="off-canvas-inner">
                <div className="close-btn">
                    <button onClick={type === 'cog' ? LoginRegClose : MobileMenuClose} className="btn-close">
                        <img src={closeIcon} alt="Close"/>
                    </button>
                </div>

                <div className="off-canvas-content mb-sm-30">
                    {children}
                </div>
            </div>
        </aside>
    );
}

export default OffCanvas;