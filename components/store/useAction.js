import types from "./actionTypes";

export const useAction = (state, middleWareDispatch) => ({
	loadUFOData: (data) => {
		console.log("action in use");
		middleWareDispatch({ type: types.SET_LOADING_INDICATOR });
		middleWareDispatch({ type: types.LOAD_UFO_DATA, payload: data });
	},
	asyncIncrement: () => {
		console.log("async increment action in use");
		middleWareDispatch({ type: types.FIRE_ASYNC_INCREMENT });
	},
	asyncDecrement: () => {
		console.log("async decrement action in use");
		middleWareDispatch({ type: types.FIRE_ASYNC_DECREMENT });
	},
});
