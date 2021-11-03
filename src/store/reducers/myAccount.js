import { actionType } from "../type/type";

const initialState = {
    movieList : {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_TICKET_DETAIL:
            state.movieList = {...action.payload};
            return {...state};
        default: 
            return state;
    }
};

export default reducer;