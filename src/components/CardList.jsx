import React from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../../style/transition.css';
import SelectedStaffSelector from '../selectors/selected_staff';

import Card from './Card';

export const CardList = props => {

  const generateList = (list=[]) => {
    return list.map((member, key) => {
      return (
        <Card {...member} key={key}/>
      );
    });
  };
  return (
    <div className="row">
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionLeaveTimeout={1000}
        transitionEnterTimeout={1000}
        transitionAppearTimeout={1000}
        transitionEnter={true}
        transitionLeave={true}>
        {generateList(props.staff)}
      </CSSTransitionGroup>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    staff: SelectedStaffSelector(state)
  };
};

//CardList.PropTypes = {
//  staff: [],
//  tabStaff: [],
//};

export default connect(mapStateToProps)(CardList);
