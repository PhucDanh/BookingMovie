import axios from "axios";
import { actionType } from "../type/type";
import { createAction } from "./action"

// async action
export const fetchMovieList = (dispatch) => {
    axios({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        headers: {
            TokenCybersoft: localStorage.getItem("tokenCyberSoft"),
        },
    }).then((res) => {
        dispatch(createAction(
            actionType.SET_MOVIE_LIST,
            res.data.content
        ))
    }).catch((err) => {
        console.log("error fetchMovieList",{...err});
    })
}

export const fetchMovieDetail = (id) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
            params: {
                MaPhim: id
            },
            headers: {
                TokenCybersoft: localStorage.getItem("tokenCyberSoft"),
            },
        }).then((res) => {
            dispatch(createAction(
                actionType.SET_MOVIE_DETAIL,
                res.data.content
            ))
        }).catch((err) => {
            console.log("error fetchMovieDetail",{...err});
        })
    }
}

export const fetchMovieBanner = (dispatch) => {
    axios({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        headers: {
            TokenCybersoft: localStorage.getItem("tokenCyberSoft"),
        },
    }).then((res) => {
        dispatch(createAction(
            actionType.SET_MOVIE_BANNER,
            res.data.content
        ))
    }).catch((err) => {
        console.log("error fetchMovieBanner",{...err});
    })
}

export const fetchMovieCinema = (dispatch) => {
    axios({
        method: "GET",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
        headers: {
            TokenCybersoft: localStorage.getItem("tokenCyberSoft"),
        },
    }).then((res) => {
        dispatch(createAction(
            actionType.SET_MOVIE_CINEMA,
            res.data.content
        ))
    }).catch((err) => {
        console.log("error fetchMovieCinema",{...err});
    })
}