import {createStore,combineReducers,applyMiddleware } from 'redux';
import combineAllReducers from '../reducers/combine-Reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { fetchMovieDetails } from '../actions/actions';


let store = createStore(
    combineAllReducers,
    applyMiddleware(thunk)
);
// store.dispatch(fetchMovieDetails);
// console.log('store.getState()', store.getState());
// store.subscribe(() => console.log('store', store.getState()));
// console.log('store.getState()', store.getState());
export default store;