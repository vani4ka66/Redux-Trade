
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import tradeReducer from './TradeReducer'
import openTradeReducer from './OpenTradeReducer';

export default () => {
    const store = createStore(combineReducers(
        {trades: tradeReducer, isOpen: openTradeReducer}), applyMiddleware(thunk))

    return store;
}

