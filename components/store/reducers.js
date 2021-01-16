import types from "./actionTypes";

const initialState = {
	loading: false,
	ufoData: null,
	error: "",
	counter: 100,
};

const reducer = (state = initialState, action) => {
	console.log("in the reducer", state, action);
	switch (action.type) {
		case types.INCREMENT:
			console.log("INCREMENTING in state reducer");
			return { ...state, counter: state.counter + 1 };
		case types.DECREMENT:
			console.log("DECREMENTING in state reducer");
			return { ...state, counter: state.counter - 1 };
		case types.SET_LOADING_INDICATOR:
			return { ...state, loading: true };
		case types.LOAD_UFO_DATA_SUCCESS:
			return { ...state, ufoData: action.payload, loading: false };
		case types.LOAD_UFO_DATA_FAIL:
			return { ...state, error: action.payload, loading: false, error: action.payload };
		default:
			return state;
	}
};

export { initialState, reducer };
