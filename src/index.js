import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SimpleTable from './Components/SimpleTable'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SimpleTable />, document.getElementById('root'));
registerServiceWorker();
