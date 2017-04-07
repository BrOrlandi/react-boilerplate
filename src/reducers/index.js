import { combineReducers } from 'redux';
import counter from './counter';

const counterApp = combineReducers({
    counter
});

export default counterApp;