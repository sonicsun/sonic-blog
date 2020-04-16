import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Article } from './pages/Article/Article';
import { Home } from './pages/Home/Home';
import './i18n';
import { Layout } from 'antd';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { Management } from './pages/Management/Management';

const { Footer, Content } = Layout;

function App() {
	return (
		<Layout style={{ height: '100%' }}>
			<Header />
			<Content style={{ marginTop: '65.5px' }}>
				<Router>
					<Switch>
						<Route path="/article/:pageId">
							<Article />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/management">
							<Management />
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
