export const AddTrade = ({amount = 0} ={}) => ({
    type: 'ADD_TRADE',
    trade: {
        amount
    }
});

export const OpenTrade = ({isOpen = false} ={}) => ({
    type: 'OPEN_TRADE',
    isOpen : isOpen
});