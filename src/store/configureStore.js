import {applyMiddleware,createStore }from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const initialState={}

const configureStore=()=>createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
)
export default configureStore;