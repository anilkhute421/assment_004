import { createStore, compose} from 'redux';
import rootReducer from './items/itemReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancer());

export default store;
