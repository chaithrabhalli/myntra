import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { mainReducer } from './reducers/mainReducer';

const store = createStore(mainReducer, applyMiddleware(thunk, logger));

export default store;