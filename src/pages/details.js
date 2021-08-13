import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		settingsMode: state.settingsMode,
		settingsLevel: state.settingsLevel,
		settingsPermission: state.settingsPermission,
	};
};

const mapDispatchToProps = () => {
	return {
		// changeSettingsMode: changeSettingsMode,
		// changeSettingsLevel: changeSettingsLevel,
		// changeSettingsPermission: changeSettingsPermission,
	};
};

class DetailsPage extends React.Component {
	render() {
		return (<form>
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

export default connect(mapStateToProps, mapDispatchToProps())(DetailsPage);