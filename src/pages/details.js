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
	constructor(props) {
		super(props);
		this.state = {
			msg: "--",
			msg_idx: 0
		};
	}
	change_state = (new_value) => {
		const msgs = ["First", "Second", "Third"];
		const new_idx = (this.state.msg_idx + 1) % msgs.length;
		this.setState({msg: msgs[new_idx], msg_idx: new_idx});
	};
	render() {
		return (<form>
			<h3 className="py-3"> Pagewise <code>state</code> w/o <code>Redux</code> </h3>
			<ul className="list-group">
				<li className="list-group-item"> 
					<span className="custom-btn custom-btn-app float-start" onClick={e => this.change_state('new value')}> Click me </span>
					<span className="float-end"> {this.state.msg} </span>
				</li>
			</ul>
			<span className="text-muted"> * state not preserved on view-change </span>


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