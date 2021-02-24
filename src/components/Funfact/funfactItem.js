import React, {Component} from 'react';
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor";

class FunfactItem extends Component {

    state = {
        appear: false
    }

    visibleChangeHandler = (isVisible) => {
        if(isVisible){
            this.setState({
                appear: true
            })
        }
    }

    render() {
        return (
            <div className="col-6 col-md-3 text-center">
                <div className="counter-item">
                    <h2 className="counter-number">
                        <CountUp start={this.state.appear ? 0 : null} end={this.props.counterNumber}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <VisibilitySensor
                                        onChange={(isVisible) => this.visibleChangeHandler(isVisible)}>
                                        <span className="sr-only">+</span>
                                    </VisibilitySensor>
                                </div>
                            )}
                        </CountUp>
                    </h2>

                    <h6 className="counter-txt">{this.props.counterText}</h6>
                </div>
            </div>
        );
    }
}

export default FunfactItem;