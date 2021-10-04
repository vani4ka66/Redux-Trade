const defaultState = {isOpen: false}

export default (state = defaultState, action) => {
    switch (action.type){
        case 'OPEN_TRADE': return [action.isOpen];
        default: return state
    }
}