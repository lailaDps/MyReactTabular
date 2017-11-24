import {combineReducers } from 'redux';
import {mesures, mesuresHasErrored, mesuresIsLoading} from './mesures';

export default combineReducers (
    {
        mesures,
        mesuresIsLoading,
        mesuresHasErrored
    }
);