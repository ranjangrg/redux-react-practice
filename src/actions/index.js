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