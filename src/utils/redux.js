export function createReducer(defaultState, handlers) {
	return (state = defaultState, { type, payload }) => {
		const handler = handlers[type];
		return handler ? handler(state, payload, type) : state;
	}
}