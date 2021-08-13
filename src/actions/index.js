import { projectDefaultState } from '../reducers/projects';

export const changeName = (_payload="-") => {
	return {
		type: "CHANGE_USER",
		payload: _payload
	};
};
export const changeAnimal = (_payload="-") => {
	return {
		type: "CHANGE_ANIMAL",
		payload: _payload
	};
};
export const changePower = (_payload=-1) => {
	return {
		type: "CHANGE_POWER",
		payload: _payload
	};
};
export const changeSettingsMode = (_payload="default") => {
	const new_mode = _payload;
	return {
		type: "CHANGE_SETTINGS_MODE",
		payload: new_mode
	};
};
export const changeSettingsLevel = (_payload=1) => {
	let new_level = _payload;
	return {
		type: "CHANGE_SETTINGS_LEVEL",
		payload: new_level
	};
};
export const changeSettingsPermission = (_payload=false) => {
	const has_permission = _payload;
	return {
		type: "CHANGE_SETTINGS_PERMISSION",
		payload: has_permission
	};
};
export const changeCurrentProject = (_payload=projectDefaultState) => {
	let current_project = _payload;
	return {
		type: "CHANGE_CURRENT_PROJECT",
		payload: current_project
	};
};