import { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
	ufoData: null,
	quakeData: null,
};

function* fetchUFOData() {}

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_UFODATA":
			return {
				...state,
				ufoData: [...state.ufoData, ...action.payload],
			};
		case "UPDATE_QUAKEDATA":
			return {
				...state,
				quakeData: [...state.quakeData, ...action.payload],
			};
		default:
			return state;
	}
};

export const StateProvider = ({ children }) => {
	let [state, dispatch] = useReducer(reducer, initialState);

	return <StateProvider.Provider value={[state, dispatch]}>{children}</StateProvider.Provider>;
};
