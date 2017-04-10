import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import NavigationBar from './NavigationBar';
import Counter from '../containers/Counter';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<NavigationBar />
				<Route exact path="/" component={App} />
				<Route path="/counter" component={Counter}/>
			</div>
		</Router>
	</Provider>
);

export default Root;
