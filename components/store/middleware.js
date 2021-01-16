import types from "./actionTypes";

export const applyMiddleware = (dispatch) => async (action) => {
	switch (action.type) {
		case types.LOAD_UFO_DATA: {
			try {
				let datas = await fetch("endpoint").then((res) => res.json());
				// unsanitized data
				dispatch({ type: types.LOAD_UFO_DATA_SUCCESS, payload: datas });
			} catch (e) {
				dispatch({ type: types.LOAD_UFO_DATA_FAIL, payload: String(e) });
			}
		}
		case types.LOAD_QUAKE_DATA: {
			try {
				let datas = await fetch("endpoint").then((res) => res.json());
				// unsanitized data
				dispatch({ type: types.LOAD_QUAKE_DATA_SUCCESS, payload: datas });
			} catch (e) {
				dispatch({ type: types.LOAD_QUAKE_DATA_FAIL, payload: String(e) });
			}
		}
		case types.FIRE_ASYNC_DECREMENT:
			console.log("within the middleware decrement", action);
			return setTimeout(() => dispatch({ type: types.DECREMENT }), 5000);

		case types.FIRE_ASYNC_INCREMENT:
			console.log("within the middleware increment", action);
			return setTimeout(() => dispatch({ type: types.INCREMENT }), 5000);

		default:
			dispatch(action);
	}
};
