import { combineReducers } from 'redux';

import changeUsernameReducer from './changeUsername';
import changeAnimalReducer from './changeAnimal';
import changePowerlevelReducer from './changePowerLevel';
import { 
	settingsModeReducer, 
	settingsLevelReducer, 
	settingsPermissionReducer 
} from './settings';
import changeCurrentProjectReducer from './projects';


const allReducers = combineReducers({
	username: changeUsernameReducer,
	animal: changeAnimalReducer,
	powerlevel: changePowerlevelReducer,
	settingsMode: settingsModeReducer,
	settingsLevel: settingsLevelReducer,
	settingsPermission: settingsPermissionReducer,
	currentProject: changeCurrentProjectReducer
});

export default allReducers;