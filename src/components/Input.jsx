import React from 'react';
import { connect } from 'react-redux';
import '../../style/searchbar.css';
import { updateQuery } from '../actions';

export const Input = ({ query, updateQuery }) => <input type="text"
                                                        placeholder="Search for a member"
                                                        onChange={e => updateQuery(e.target.value)}
                                                        value={query}/>;

export default connect(({ query }) => ({ query }), { updateQuery })(Input);

