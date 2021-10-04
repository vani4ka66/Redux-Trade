import { Fragment } from "react";
import React from "react";

interface ITrade {
    amount: number;
    currency: string
}

export default class Trade extends React.Component<ITrade>{
    constructor(props: ITrade){
        super(props)

        this.state = {
            amount: props.amount,
            currency: props.currency,
        }
    }

    render(){
        return (
            <Fragment>Trade: amount - {this.props.amount} {this.props.currency} </Fragment>

        )
    }


}



