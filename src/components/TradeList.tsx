import React from "react";
import { connect } from 'react-redux'
import { Currency } from "../enum/Currency";
import Trade from "../core/Trade"

const TradeList = (props) => (

    <div>
        <h1> My Trade list:</h1>
        {props.trades.map((item, index) => {
            return (
                <div> {index + 1}. <Trade key={index + 1} amount={item.amount} currency={Currency.USD}></Trade>
                </div>
                  
            )
        })}
    </div>
);

const mapState = (state) => {
    return{
        trades: state.trades
    }
}

export default connect(mapState)(TradeList);