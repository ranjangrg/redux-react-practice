
const changePowerlevelReducer = (state = -1, action) => {
	const random_power = Math.floor(Math.random() * 100);
	switch (action.type) {
		case "CHANGE_POWER":
			let payload = action.payload;
			if (payload === -1) {
				payload = random_power;
			}
			return payload;
		default:
			return state;
	}
}

export default changePowerlevelReducer;