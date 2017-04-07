const counter = (state = 10, action) => {
    switch(action.type){
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        case 'RESET_COUNTER':
            return 0;
        default:
            return state;
    }
};

export default counter;