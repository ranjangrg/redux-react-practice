const changeUsernameReducer = (state = "-", action) => {
	const usernames = [
		"Adam", "Blake", "Carey", "Dorian", "Eligby",
		"Fareh", "Giles", "Haney", "Ian", "Jules"
	];
	const idx = Math.floor(Math.random() * usernames.length);
	switch (action.type) {
		case "CHANGE_USER":
			let payload = action.payload;
			if (payload === "-") {
				payload = usernames[idx];
			}
			return payload;
		default:
			return state;
	}
}

export default changeUsernameReducer;