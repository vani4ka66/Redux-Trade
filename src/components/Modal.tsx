import React from "react";
import { useState } from "react";
import { connect } from 'react-redux'
import {AddTrade, OpenTrade} from '../app/redux/ReduxActions'
import Modal from 'react-modal'
import './Modal.css'

const Modal = (props) =>{

    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(value)
        
    }

    const  addTrade = () => {
        // props.dispatch(OpenTrade({  }))

        setTimeout(() =>{ 
            if(!isNaN(value)){

                let amount: number = 0;
                amount = parseFloat(value)

                props.dispatch(AddTrade({amount: amount }))
            }
        }, 600);
    }

    return(
        <div className='modal'>
            <input type="number" onChange={handleChange} placeholder="Enter amount" />
            <button onClick={addTrade}>Buy</button>
        </div>
    )
}

const mapStateModal = (state, props) => {
    return {
        trades: state.trades
    }
}

export default connect(mapStateModal)(Modal)
