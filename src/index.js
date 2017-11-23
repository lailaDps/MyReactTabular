import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MyListMesure from './Components/MyListMesure';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyListMesure />, document.getElementById('root'));
registerServiceWorker();
