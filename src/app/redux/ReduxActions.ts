export const AddTrade = ({amount = 0} ={}) => ({
    type: 'ADD_TRADE',
    trade: {
        amount
    }
});

export const OpenTrade = ({} ={}) => ({
    type: 'OPEN_TRADE',
    trade: {

    }
});