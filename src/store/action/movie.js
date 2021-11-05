import { request } from "../../api/request";
import { actionType } from "../type/type";
import { createAction } from "./action"

// async action
export const fetchMovieList = (dispatch) => {
    request({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    }).then((res) => {
        console.log("res fetchMovieList", res.data);
        dispatch(createAction(
            actionType.SET_MOVIE_LIST,
            res.data.content
        ))
    }).catch((err) => {
        console.log("error fetchMovieList", { ...err });
    })
}

export const fetchMovieDetail = (id) => {
    return (dispatch) => {
        request({
            method: "GET",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
            params: {
                MaPhim: id
            },
        }).then((res) => {
            console.log("res fetchMovieDetail", res.data);
            dispatch(createAction(
                actionType.SET_MOVIE_DETAIL,
                res.data.content
            ))
        }).catch((err) => {
            console.log("error fetchMovieDetail", { ...err });
        })
    }
}

export const fetchMovieBanner = (dispatch) => {
    request({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
    }).then((res) => {
        console.log("res fetchMovieBanner", res.data);
        dispatch(createAction(
            actionType.SET_MOVIE_BANNER,
            res.data.content
        ))
    }).catch((err) => {
        console.log("error fetchMovieBanner", { ...err });
    })
}

export const fetchMovieCinema = (dispatch) => {
    request({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
    }).then((res) => {
        console.log("res fetchMovieCinema", res.data);
        dispatch(createAction(
            actionType.SET_MOVIE_CINEMA,
            res.data.content
        ))
    }).catch((err) => {
        console.log("error fetchMovieCinema", { ...err });
    })
}

export const fetchCinemaListSeat = (maLichChieu) => {
    return (dispatch) => {
        request({
            method: "GET",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe",
            params: {
                MaLichChieu: maLichChieu
            },
        }).then((res) => {
            console.log("res fetchCinemaListSeat", res.data);
            dispatch(createAction(
                actionType.SET_CINEMA_LIST_SEAT,
                res.data.content
            ))
        }).catch((err) => {
            console.log("error fetchCinemaListSeat", { ...err });
        })
    }
}

export const postDatVe = (contentData) => {
    return (dispatch) => {
        request({
            method: "POST",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            data: contentData
        }).then((res) => {
            console.log("res postDatVe", res.data);
        }).catch((err) => {
            console.log("error postDatVe", { ...err });
        })
    }
}