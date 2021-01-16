import { useReducer, createContext } from "react";

const initialState = {
	tester: "something",
	counter: 100,
};

export const StateStore = createContext(initialState);

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				counter: state.counter + 1,
			};
		case "DECREMENT":
			return {
				...state,
				counter: state.counter - 1,
			};

		default:
			return state;
	}
};

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <StateStore.Provider value={{ state, dispatch }}>{children}</StateStore.Provider>;
};
