import counterApp from './reducers';
import { createStore, compose } from 'redux';

const store = createStore(
    counterApp,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;