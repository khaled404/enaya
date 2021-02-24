import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

class SpecialistsList extends Component {
  render(props) {
    const SpecLink = `/specialties/clinic?id=${this.props.Id}`;
    return (
      <Fragment>
        <li>
          <Link to={`${process.env.PUBLIC_URL + SpecLink}`}>
            <img src={this.props.img} alt={this.props.name} />
            <span className="spec-name">{this.props.name}</span>
          </Link>
        </li>
      </Fragment>
    );
  }
}

export default SpecialistsList;
