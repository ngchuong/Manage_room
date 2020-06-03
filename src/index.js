import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import rootSaga from './store/sagas';

// create store start

const composeEnhaners =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
			trace: true,
			traceLimit: 15
		}) : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	rootReducer,
	composeEnhaners(
		applyMiddleware(
			sagaMiddleware,
		)
	)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

