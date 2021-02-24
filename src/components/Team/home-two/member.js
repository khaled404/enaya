import React from 'react';
import {Link} from "react-router-dom";

const TeamMember = ({id,profilePic,name,designation}) => {
    const teamMemberURl = `/team-member/${name.split(' ').join('-').toLocaleLowerCase()}?id=${id}`;
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="team-mem-item team-mem-item--2">
                <figure className="member-pic">
                    <Link to={`${process.env.PUBLIC_URL + teamMemberURl}`}>
                        <img src={require('../../../assets/img/' + profilePic)} alt={name}/>
                    </Link>
                </figure>
                <div className="member-info">
                    <h5><Link to={`${process.env.PUBLIC_URL + teamMemberURl}`}>{name}</Link></h5>
                    <span className="designation">{designation}</span>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;