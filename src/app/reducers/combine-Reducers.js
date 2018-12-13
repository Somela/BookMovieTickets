import { combineReducers } from 'redux';
import products from './reducer';

const combineAllReducers = combineReducers({
    products
});
export default combineAllReducers;