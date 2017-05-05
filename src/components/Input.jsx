import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../actions';

export const Input = ({query, updateQuery}) => {
	const logChange = (e) => {
		updateQuery(e.target.value);
	};

	return (
		<div>
			<input type="text" autoFocus={true} onChange={logChange} value={query}/>
		</div>
	);
};

export default connect(({ query }) => ({ query }), { updateQuery })(Input);

