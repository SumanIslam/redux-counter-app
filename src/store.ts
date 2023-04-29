import { createStore } from 'redux';
import { CounterReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(CounterReducer, composeWithDevTools());
