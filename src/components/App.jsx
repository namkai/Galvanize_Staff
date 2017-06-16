import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../../style/transition.css';
import CardList from './CardList';
import Navbar from './Navbar';

import Tabs from './Tabs';

const App = () => {

	return (
		<div className="app-container">
			<Navbar />
			<div className="container">
				<Tabs/>
				<CSSTransitionGroup
					transitionName="example"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionLeave={false}>
					<CardList/>
				</CSSTransitionGroup>
			</div>
		</div>
	);
};


export default App;
