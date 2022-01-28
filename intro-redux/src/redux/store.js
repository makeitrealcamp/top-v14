import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

// redux saga 

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;