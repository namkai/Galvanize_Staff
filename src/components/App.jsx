import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../../style/transition.css';

import CardList from './card/CardList';
import Input from './Input';
import Tabs from './Tabs';

const App = (props) => {

  return (
    <div className="container">
      <h2 className="center">Galvanize Staff</h2>
      <div className="container">
        <Input/>
      </div>
      <Tabs/>
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}>
        <CardList/>
      </CSSTransitionGroup>
    </div>
  );
};


export default App;
