import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
