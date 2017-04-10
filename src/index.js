import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import counterApp from './reducers';

import Root from './components/Root';

const store = createStore(
    counterApp,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const rootEl = document.getElementById('root');

const render = () =>{
  ReactDOM.render(
    <AppContainer>
        <Root store={store}/>
    </AppContainer>,
    rootEl
  );
};

render();
// eslint-disable-next-line
if (module.hot) module.hot.accept('./components/App', () => render()); // react hot reloader
