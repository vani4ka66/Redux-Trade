
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import tradeReducer from './TradeReducer'

export default () => {
    const store = createStore(combineReducers({trades: tradeReducer}), applyMiddleware(thunk))

    return store;
}

