import React from 'react';
import teamData from '../../data/Team/home-one';
import TeamMember from "../../components/Team/home-one/Member";

const TeamPage = () => {
    return (
        <div className="team-page-area-wrapper bg-offwhite sp-y sm-top">
            <div className="container">
                <div className="row mtn-30">
                    {
                        teamData.map(member=>(
                            <TeamMember key={member.id} type={'page'} id={member.id} name={member.name} designation={member.designation} profilePic={member.profilePic}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamPage;