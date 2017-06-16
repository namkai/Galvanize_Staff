import React from 'react';
import { connect } from 'react-redux';
import { updateTag } from '../actions';
import '../../style/tabs.css';

export const Tabs = ({ updateTag }) => {
  return (
    <div className="row" style={{marginTop: '10px'}}>
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s4"><a className="active" href="#hot" onClick={() => updateTag()}>All Staff</a></li>
          <li className="tab col s4"><a href="#New" onClick={() => updateTag('DSI')}>Data Science</a></li>
          <li className="tab col s4"><a href="#Rising" onClick={() => updateTag('WDI')}>Web Development</a></li>
        </ul>
      </div>
    </div>
  );
};

export default connect(null, { updateTag })(Tabs);

