import types from "./actionTypes";

const initialState = {
	loading: false,
	ufoData: null,
	quakeData: null,
	error: "",
	counter: 100,
};

const reducer = (state = initialState, action) => {
	console.log("in the reducer", state, action);
	switch (action.type) {
		case types.SET_LOADING_INDICATOR:
			return { ...state, loading: true };
		case types.INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case types.DECREMENT:
			return { ...state, counter: state.counter - 1 };
		case types.LOAD_QUAKE_DATA_SUCCESS:
			return { ...state, quakeData: action.payload, loading: false };
		case types.LOAD_QUAKE_DATA_FAILURE:
			return { ...state, quakeData: null, loading: false, error: action.payload };
		case types.LOAD_UFO_DATA_SUCCESS:
			return { ...state, ufoData: action.payload, loading: false };
		case types.LOAD_UFO_DATA_FAIL:
			return { ...state, error: action.payload, loading: false, error: action.payload };
		default:
			return state;
	}
};

export { initialState, reducer };
