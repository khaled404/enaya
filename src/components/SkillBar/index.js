import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor'

const SkillBar = ({skillPercent, title}) => {
    const [appear, setAppear] = useState(false);
    const onChange = (isVisible) => {
        if (isVisible) {
            setAppear(true);
        }
    };

    const styleAnimate = {
        width: `${skillPercent}%`
    };

    return (
        <VisibilitySensor onChange={onChange}>
            <div className="single-skill-bar">
                <div className="skills-info d-flex align-items-center justify-content-between"
                     style={styleAnimate}>
                    <span className="skill-title">{title}</span>
                    <span className="skill-percent">{skillPercent}%</span>
                </div>

                <div className="skill-progress progress">
                    <div className="progress-bar skill-progress-bar" style={appear ? styleAnimate : null}/>
                </div>
            </div>
        </VisibilitySensor>
    );
};

export default SkillBar;