import { useReducer, createContext } from "react";
import { reducer, initialState } from "./reducers";
import { useAction } from "./useAction";
import { applyMiddleware } from "./middleware";

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const actions = useAction(state, applyMiddleware(dispatch));
	return <StoreContext.Provider value={{ state, actions }}>{children}</StoreContext.Provider>;
};
