import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../actions';

export const Input = (props) => {
  const { query, updateQuery } = props;
  const logChange = (e) => {
    updateQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" autoFocus={true} onChange={logChange} value={query}/>
    </div>
  );
};


const mapStateToProps = ({ query }) => {
  return {
    query,
  };
};

export default connect(mapStateToProps, { updateQuery })(Input);