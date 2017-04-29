import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../../style/transition.css';

import CardList from './CardList';
import Input from './Input';
import Tabs from './Tabs';

const App = () => {

  return (
    <div className="container">
      <h3 className="center">Galvanize Staff</h3>
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
