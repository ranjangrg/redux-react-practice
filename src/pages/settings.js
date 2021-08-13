import React from 'react';
import { connect } from 'react-redux';

import { 
	changeSettingsMode, 
	changeSettingsLevel, 
	changeSettingsPermission 
} from '../actions';

const mapStateToProps = (state) => {
	return {
		settingsMode: state.settingsMode,
		settingsLevel: state.settingsLevel,
		settingsPermission: state.settingsPermission,
	};
};

const mapDispatchToProps = () => {
	return {
		changeSettingsMode: changeSettingsMode,
		changeSettingsLevel: changeSettingsLevel,
		changeSettingsPermission: changeSettingsPermission,
	};
};

class SettingsPage extends React.Component {
	select_elem = (elem) => {
		elem.target.classList.toggle("selected");
		console.log(elem.target);
	};
	render() {
		return (<form>
				<h1 className="py-3"> Change Settings </h1>
				<div className="container pt-3">
					<ul className="list-group">
						<li className="list-group-item"> 
							<span className="float-start"> Light Mode </span>
							<span className="btn-group float-end" role="group">
								<h3 className="btn btn-dark" onClick={(elem) => this.props.changeSettingsMode('Dark') }> DarkMode </h3>
								<h3 className="btn btn-primary"onClick={() => this.props.changeSettingsMode('Light')}> LightMode </h3>
							</span>
						</li>
						<li className="list-group-item"> 
							<span className="float-start"> Level </span>
							<span className="btn-group float-end" role="group">
								<h3 className="btn btn-secondary" onClick={() => this.props.changeSettingsLevel(-1)}> - </h3>
								<h3 className="btn btn-primary"onClick={() => this.props.changeSettingsLevel(1)}> + </h3>
							</span>
						</li>
						<li className="list-group-item"> 
							<span className="float-start"> Give Permission </span>
							<span className="btn-group float-end" role="group">
								<h3 className="btn btn-dark" onClick={() => this.props.changeSettingsPermission(true)}> Yes </h3>
								<h3 className="btn btn-primary"onClick={() => this.props.changeSettingsPermission(false)}> No </h3>
							</span>
						</li>
					</ul>
				</div>

				<h1 className="py-3"> Current Settings </h1>
				<ul className="list-group">
					<li className="list-group-item"> 
						<span className="float-start"> Current Mode </span> 
						<span className="float-end"> { this.props.settingsMode } </span>
					</li>
					<li className="list-group-item"> 
						<span className="float-start"> Current Level <sub>max. 10</sub> </span> 
						<span className="float-end"> { this.props.settingsLevel } </span>
					</li>
					<li className="list-group-item"> 
						<span className="float-start"> Has Permission? </span> 
						<span className="float-end"> 
							{ this.props.settingsPermission ? 'Yes' : 'No' } 
						</span>
					</li>
				</ul>
			</form>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(SettingsPage);