export const projectDefaultState = {
	title: "--no-title--",
	desc: "--no-desc--"
};
export const changeCurrentProjectReducer = ( initial_state=projectDefaultState, action ) => {
	switch (action.type) {
		case 'CHANGE_CURRENT_PROJECT':
			return action.payload;
		default:
			return initial_state;
	}
};

export default changeCurrentProjectReducer;