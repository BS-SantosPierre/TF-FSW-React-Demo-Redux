import { createReducer } from "@reduxjs/toolkit";
import { counterIncrement, counterReset } from "../actions/counter-action";

// Etat initial de mon compteur
const initialState = {
	count: 0
};

// Reducer pour compteur
const counterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(counterIncrement, (state, action) => {
			return {
				...state,
				count: state.count + action.payload
			}
		})
		.addCase(counterReset, (state) => {
			return {
				...state,
				count: 0
			}
		})
});

export default counterReducer;
