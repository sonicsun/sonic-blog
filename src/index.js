import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import './i18n';
import { Layout } from 'antd';
import { Header } from './components/Header/Header';

const { Footer, Content } = Layout;

function App() {
	return (
		<Layout>
			<Header />
			<Content style={{ marginTop: '65.5px' }}>
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
			</Content>
			<Footer style={{ textAlign: 'center' }}>Sonic Sun's Personal Website</Footer>
		</Layout>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
