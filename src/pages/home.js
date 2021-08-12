import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeAnimal, changePower } from '../actions';

function HomePage() {
	const _state = useSelector( state => state );
	const dispatch = useDispatch();

	const user_change = (e) => {
		console.log(e.target.value);
	};

	return (
		<form>
			<h1> Home page </h1>

			<h4 className="btn btn-primary" onClick={() => dispatch(changeName())}> Change name </h4>
			<h4 className="btn btn-primary" onClick={() => dispatch(changeAnimal())}> Change Animal </h4>
			<h4 className="btn btn-primary" onClick={() => dispatch(changePower())}> Change Power </h4>
			
			<div className="mb-3">
				<label htmlFor="home-username" className="form-label">Username</label>
				<input type="text" className="form-control" id="home-username" 
					value={_state.username} 
					onChange={user_change}
					/>
				{/* <div id="home-username-help" className="form-text">Enter username here</div> */}
			</div>
			<div className="mb-3">
				<label htmlFor="home-animal" className="form-label">Favourite Animal</label>
				<input type="text" className="form-control" id="home-animal" value={_state.animal} />
			</div>
			<div className="mb-3">
				<label htmlFor="home-power-level" className="form-label">Power Level</label>
				<input type="text" className="form-control" id="home-power-level" value={_state.powerlevel} />
			</div>
			<div className="mb-3 form-check">
				<input type="checkbox" className="form-check-input" id="home-is-hero" />
				<label className="form-check-label" htmlFor="home-is-hero"> Are you a hero?</label>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	);
}

export default HomePage;

// class HomePage extends React.Component {
// 	componentDidMount() {
// 		// componentWillMount() deprecated!
// 		// fetch("https://jsonplaceholder.typicode.com/todos")
// 		// 	.then( (res) => {return res.json();} )
// 		// 	.then( (data) => { this.setState({"users": data}); } )
// 		// 	.then( () => {console.log(this.state);} )
// 	}
// 	render() {
// 		// const users = this.state.users.map( (user) => {
// 		// 	return (
// 		// 		<div key={user.id}>
// 		// 			<span>{user.id}</span><span> {user.title} </span>
// 		// 		</div>
// 		// 	);
// 		// } );
// 		return (
// 			<form>
// 				<h1> Home page </h1>
// 				<div className="mb-3">
// 					<label htmlFor="home-username" className="form-label">Username</label>
// 					<input type="text" className="form-control" id="home-username" />
// 					{/* <div id="home-username-help" className="form-text">Enter username here</div> */}
// 				</div>
// 				<div className="mb-3">
// 					<label htmlFor="home-animal" className="form-label">Favourite Animal</label>
// 					<input type="text" className="form-control" id="home-animal" />
// 				</div>
// 				<div className="mb-3">
// 					<label htmlFor="home-power-level" className="form-label">Power Level</label>
// 					<input type="text" className="form-control" id="home-power-level" />
// 				</div>
// 				<div className="mb-3 form-check">
// 					<input type="checkbox" className="form-check-input" id="home-is-hero" />
// 					<label className="form-check-label" htmlFor="home-is-hero"> Are you a hero?</label>
// 				</div>
// 				<button type="submit" className="btn btn-primary">Submit</button>

// 			</form>
// 		);
// 	}
// }