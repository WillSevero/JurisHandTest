import { createStore } from 'redux';
import storeReducer from './storeReducer';

const store = createStore(storeReducer);

export default store;