import { combineReducers } from 'redux';

import changeUsernameReducer from './changeUsername';
import changeAnimalReducer from './changeAnimal';
import changePowerlevelReducer from './changePowerLevel';


const allReducers = combineReducers({
	username: changeUsernameReducer,
	animal: changeAnimalReducer,
	powerlevel: changePowerlevelReducer
});

export default allReducers;