import React from 'react';
import { connect } from 'react-redux';
import { updateTag } from '../actions';
import '../../style/tabs.css';

export const Tabs = props => {
  const { updateTag } = props;

  return (
    <div className="row">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s2"><a className="active" href="#hot" onClick={() => updateTag()}>All</a></li>
          <li className="tab col s2"><a href="#New" onClick={() => updateTag('DSI')}>DSI</a></li>
          <li className="tab col s2"><a href="#Rising" onClick={() => updateTag('WDI')}>WDI</a></li>
        </ul>
      </div>
    </div>
  );
};

const style = {
  textStyle: {
    color: 'orange',
  }
}

export default connect(null, { updateTag })(Tabs);

