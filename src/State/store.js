import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { ProductReducer } from './Slices/ProductSlices'
import { compose } from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import { authReducer } from './Slices/authSlices'
const reducer = combineReducers({
    ProductReducer: ProductReducer,
    authReducer: authReducer
    //
})

const composeEnhancers = (window['REDUX_DEVTOOLS_EXTENSION_COMPOSE']) || compose;
const store = configureStore({
    reducer,
}, composeEnhancers(applyMiddleware(thunk)))
export default store;