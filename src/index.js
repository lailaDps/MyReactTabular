import React from 'react';
import render from 'react-dom';
import './index.css';
//import App from './App';
import MyListMesure from './Components/MyListMesure';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import MylistMesure from './Components/MyListMesure';


const store =configureStore();
render (

    <provider store={store}>
    <MyListMesure/>
    </provider>,document.getElementById('app')
);


registerServiceWorker();
