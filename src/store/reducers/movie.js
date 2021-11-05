import { actionType } from "../type/type";

const initialState = {
    movieList : [],
    movieDetail: {},
    movieBanner: [],
    movieCinemaList: [],
    thongTinPhim: {},
    danhSachGhe: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_MOVIE_LIST:
            state.movieList = [...action.payload];
            return {...state};
        case actionType.SET_MOVIE_DETAIL:
            state.movieDetail = {...action.payload};
            return {...state};
        case actionType.SET_MOVIE_BANNER:
            state.movieBanner = [...action.payload];
            return {...state};
        case actionType.SET_MOVIE_CINEMA:
            state.movieCinemaList = [...action.payload];
            return {...state};
        case actionType.SET_CINEMA_LIST_SEAT:
            state.thongTinPhim = {...action.payload.thongTinPhim};
            state.danhSachGhe = [...action.payload.danhSachGhe];
            return {...state};
        default: 
            return state;
    }
};

export default reducer;