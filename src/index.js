import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';

import App from './components/App';

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
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    rootEl
  );
};

render();
if (module.hot) module.hot.accept('./components/App', () => render());
