import { createAction } from "@reduxjs/toolkit";

export const counterIncrement = createAction('counter/increment', (step) => {
	return {
		payload: step
	}
});
export const counterReset = createAction('counter/reset');
