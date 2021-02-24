import React,{Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import MemberInfo from "./MemberInfo";

import teamData from '../../data/Team/home-one'
import SkillsExperience from "./SkillsExperience";
import Education from "./Education";
import PageHeader from "../../components/PageHeader";

const TeamDetailsPage = () => {
    const memberID = new URLSearchParams(window.location.search).get("id");
    const teamMember = teamData.find(member=> member.id === parseInt(memberID));
    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={teamMember.name}
                content={teamMember.designation}
            />

            <PageWrapper classes={'member-details-wrapper sm-top'}>
                <div className="col-12">
                    <MemberInfo teamMember={teamMember}/>
                    <SkillsExperience teamMember={teamMember}/>
                    <Education teamMember={teamMember}/>
                </div>
            </PageWrapper>
        </Fragment>
    );
};

export default TeamDetailsPage;