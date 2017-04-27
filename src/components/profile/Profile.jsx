import React from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../../../style/transition.css';
import ProfileContent from './ProfileContent';

const Profile = props => {
  const { member } = props;
  console.log(member, `test est`)
  const { bio, name, link, picture } = member;
  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>

      <ProfileContent picture={picture} />
    </CSSTransitionGroup>

  )
};

const mapStateToProps = ({staff}) => {
  console.log(staff, `Profile`);
  return {
    member: staff.member,
  };
};

export default connect(mapStateToProps)(Profile);