
const changeAnimalReducer = (state = "-", action) => {
	const animals = [
		"Monkey", "Cat", "Dog", "Lizard", "Snake",
		"Deer", "Dragon", "Elephant", "Parrot", "Mouse"
	];
	const idx = Math.floor(Math.random() * animals.length);
	switch (action.type) {
		case "CHANGE_ANIMAL":
			let payload = action.payload;
			if (payload === "-") {
				payload = animals[idx];
			}
			return payload;
		default:
			return state;
	}
}

export default changeAnimalReducer;