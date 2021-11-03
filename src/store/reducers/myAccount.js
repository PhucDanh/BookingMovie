import { actionType } from "../type/type";

const initialState = {
    ticketDetail : {},
    accountInfor: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_TICKET_DETAIL:
            state.ticketDetail = {...action.payload};
            return {...state};
        case actionType.SET_ME:
            state.accountInfor = {...action.payload};
            return {...state};
        default: 
            return state;
    }
};

export default reducer;