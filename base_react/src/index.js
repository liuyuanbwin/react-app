import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ControlPanel from './views/CountrolPanel';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <ControlPanel/>,
  document.getElementById('root')
);
registerServiceWorker();
