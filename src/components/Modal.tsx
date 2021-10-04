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
    }

    const  addTrade = () => {
        setTimeout(() =>{ 
            if(!isNaN(value)){

                let amount: number = 0;
                amount = parseFloat(value);

                props.dispatch(AddTrade({amount: amount }));
                props.dispatch(OpenTrade({isOpen: false }));
                setValue(undefined)
            }
        }, 600);
    }

    return(
            <div >
               {props.isOpen[0] && (
               <div className='modal'>
                   <input type="number" onChange={handleChange} placeholder="Enter amount" />
                    <button onClick={addTrade}>Buy</button>
                </div>
                    )}
             </div>
    )
}

const mapStateModal = (state) => {
    // console.log(state.isOpen)
    return {
        trades: state.trades,
        isOpen: state.isOpen
    }
}

export default connect(mapStateModal)(Modal)
