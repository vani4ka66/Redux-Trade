const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type){
        case 'ADD_TRADE': 
        return [...state, action.trade];
        
        case 'OPEN_TRADE':
            return [...state];
        default: 
            return state
    }
}