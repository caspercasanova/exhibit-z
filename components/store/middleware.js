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
			break;
		}

		case types.LOAD_QUAKE_DATA: {
			const earthQuakeURL =
				"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

			try {
				let unparsedData = await fetch(earthQuakeURL);
				let data = await unparsedData.json();
				// unsanitized data
				console.log("QUAKE DATA FETCHED", data);
				dispatch({ type: types.LOAD_QUAKE_DATA_SUCCESS, payload: data });
			} catch (e) {
				dispatch({ type: types.LOAD_QUAKE_DATA_FAILURE, payload: String(e) });
			}
			break;
		}

		case types.FIRE_ASYNC_DECREMENT:
			return setTimeout(() => dispatch({ type: types.DECREMENT }), 5000);

		case types.FIRE_ASYNC_INCREMENT:
			return setTimeout(() => dispatch({ type: types.INCREMENT }), 5000);

		default:
			dispatch(action);
	}
};
