import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';


// pages import
import HomePage from '../pages/home';
import ProjectsPage from '../pages/projects';
import SettingsPage from '../pages/settings';
import ContactPage from '../pages/contact';

class Content extends React.Component {
	render() {
		const content_style = {
			paddingLeft: "1rem",
			paddingRight: "1rem"
		};
		return (
			<div className="App-content" style={content_style}>
				<Switch>
					<Route exact path="/"> <HomePage /> </Route>
					<Route path="/home"> <HomePage /> </Route>
					<Route path="/projects"> <ProjectsPage /> </Route>
					<Route path="/settings" component={SettingsPage} />
					<Route path="/contact"> <ContactPage /> </Route>
				</Switch>
			</div>
		);
	}
}

export default Content;