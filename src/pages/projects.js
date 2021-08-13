import React from 'react';
import { connect } from 'react-redux';

import { changeCurrentProject } from '../actions';
import { projectDefaultState } from '../reducers/projects';

const mapStateToProps = (state) => {
	return {
		currentProject: state.currentProject
	};
};

const mapDispatchToProps = () => {
	return {
		changeCurrentProject: changeCurrentProject
	};
};

class ProjectsPage extends React.Component {

	// function below ONLY for experimentation
	changeCurrentProjectWrapper = (e) => {
		// make sure not to copy default state but to 
		// create a new dict object
		// since, states are by concept immutable,
		// so just modifying states doesn't trigger state change
		// within redux (it compares state references NOT values )
		// see: https://blog.jakoblind.no/react-component-not-updating/
		let current_project = {...projectDefaultState};
		const elem = document.getElementById(e.target.dataset.parentCardId);
		
		// extracting data from bs-card (ONLY for experimentation)
		// note: use 'state' or redux 'store' in production projects
		current_project.title = elem.children[0].textContent;
		const card_body_elem = elem.children[1]; // not always tho
		
		for (const child of card_body_elem.children) {
			if (child.classList.contains("card-text")) {
				current_project.desc = child.textContent;
			}
		}
		this.props.changeCurrentProject(current_project);
	}
	create_project_card = (card_title, card_desc, card_id) => {
		const card_style = {
			cursor: "pointer"
		};
		return (<div className="col">
			<div className="card" id={ card_id } style={ card_style }>
				<div className="card-header">
					<h5>{ card_title }</h5>
				</div>
				<div className="card-body">
					<p className="card-text"> { card_desc } </p>
				</div>
				<div className="card-footer text-muted">
					<span 
						className="stretched-link"
						data-parent-card-id={ card_id }
						onClick={ this.changeCurrentProjectWrapper }>
						Click to select
					</span>
				</div>
			</div>
		</div>);
	};
	render() {
		return (<div>
			<h1 className="py-3"> Projects page </h1>
			<div className="container">
				<div className="row">
					{ this.create_project_card('Project 1', 'Project 1 details', 'project-id-1') }
					{ this.create_project_card('Project 2', 'Project 2 details', 'project-id-2') }
					{ this.create_project_card('Project 3', 'Project 3 details', 'project-id-3') }
				</div>
				<div className="row">
					{ this.create_project_card('Project 4', 'Project 4 details', 'project-id-4') }
					{ this.create_project_card('Project 5', 'Project 5 details', 'project-id-5') }
					{ this.create_project_card('Project 6', 'Project 6 details', 'project-id-6') }
				</div>
			</div>

			<div className="py-3">
				<div className="card col">
					<div className="card-body">
						<h5 className="card-title">
							Current project <hr />
							{ this.props.currentProject.title }
						</h5>
						<p className="card-text">
							{ this.props.currentProject.desc }
						</p>
						<span className="btn btn-primary">Select</span>
					</div>
				</div>
			</div>
		</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(ProjectsPage);