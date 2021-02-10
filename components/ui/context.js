import React, { createContext, useContext, useReducer, useMemo } from "react";

const initialState = {
	modalView: "DATA",
	displayModal: false,
};

export const UIContext = createContext(initialState);

function uiReducer(state = {}, action) {
	switch (action.type) {
		case "OPEN_MODAL": {
			return { ...state, displayModal: true };
		}
		case "CLOSE_MODAL": {
			return {
				...state,
				displayModal: false,
			};
		}

		default: {
			return state;
		}
	}
}

export const UIProvider = (props) => {
	const [state, dispatch] = useReducer(uiReducer, initialState);

	const openModal = () => dispatch({ type: "OPEN_MODAL" });
	const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

	const value = useMemo(
		() => ({
			openModal,
			closeModal,
		}),
		[state]
	);

	return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
	const context = useContext(UIContext);
	if (context === undefined) {
		throw new Error(`useUI must be used within a UIProvider`);
	}
	return context;
};
export const ManagedUIContext = ({ children }) => <UIProvider>{children}</UIProvider>;
