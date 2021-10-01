import "../../resources/css/layout.scss"
import React from "react";
import { useState } from "react";
import {Provider } from 'react-redux'
import ReduxStore from "../app/redux/ReduxStore";
import {AddTrade, OpenTrade} from '../app/redux/ReduxActions'
import TradeList from "./TradeList";
import Modal from "./Modal"

interface IProps {

}

export const App: React.FunctionComponent<IProps> = ({}: IProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const store = ReduxStore()

    store.dispatch(AddTrade({amount: 55}))
    store.dispatch(AddTrade({amount: 65}))

    const state = store.getState();

    // setIsOpen(state.isOpen[0])

    const handleOpen = () => {

        store.dispatch(OpenTrade({isOpen: true }))
        setIsOpen(true)

        // console.log(store.getState().isOpen[0])
    }

    const app = (
        <Provider store={store}>
            <div className= {isOpen ? 'modal-overlay' : 'wrapper'} >
                Application
                <br /><br />
                <TradeList />
                <br />
                <button onClick={handleOpen}>Open trade</button>
                <br />
                {isOpen &&  <Modal /> }
            </div>
        </Provider>
    )

    return app;
};
