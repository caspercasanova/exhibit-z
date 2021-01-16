import types from "./actionTypes";

const initialState = {
	loading: false,
	ufoData: null,
	error: "",
	counter: 100,
};

const reducer = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {
		case types.INCREMENT:
			return { ...state, counter: (state.counter += 1) };
		case types.DECREMENT:
			return { ...state, counter: (state.counter -= 1) };
		case types.SET_LOADING_INDICATOR:
			return { ...state, loading: true };
		case types.LOAD_UFO_DATA_SUCCESS:
			return { ...state, ufoData: action.payload, loading: false };
		case types.LOAD_UFO_DATA_FAIL:
			return { ...state, error: action.payload, loading: false, error: String(action.payload) };
	}
};

export { initialState, reducer };
