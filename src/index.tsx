import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';

const AppContainer = () => {
  return <App />;
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));
