export const settingsModeReducer = (initial_state = 'Default', action ) => {
	switch (action.type) {
		case 'CHANGE_SETTINGS_MODE':
			return action.payload;
		default:
			return initial_state;
	}
};

export const settingsLevelReducer = (initial_state = 1, action ) => {
	let new_level = initial_state + action.payload;
	new_level = (new_level > 10) ? 10 : new_level;
	new_level = (new_level <= 0) ? 1 : new_level;
	switch (action.type) {
		case 'CHANGE_SETTINGS_LEVEL':
			return new_level;
		default:
			return initial_state;
	}
};

export const settingsPermissionReducer = (initial_state = false, action ) => {
	let has_permission = initial_state;
	if (action.payload !== undefined) {
		has_permission = action.payload;
	}
	switch (action.type) {
		case 'CHANGE_SETTINGS_PERMISSION':
			return has_permission;
		default:
			return initial_state;
	}
};

export default settingsModeReducer;