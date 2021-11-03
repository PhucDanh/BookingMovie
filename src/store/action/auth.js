import axios from "axios";
import { actionType } from "../type/type";
import { createAction } from "../action/action"


export const signIn = (userLogin, callBack) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: userLogin,
            headers: {
                TokenCybersoft: localStorage.getItem("tokenCyberSoft"),
            },
        }).then((res) => {
            console.log(res.data.content);
            dispatch(createAction(
                actionType.SET_ME,
                res.data.content
            ));
            localStorage.setItem("token", res.data.accessToken);
            callBack();
        }).catch((err) => {
            console.log("error sign in",{...err});
            alert(err.response.data.content);
        })
    }
}

export const fetchMe = (dispatch) => {
    try {
        const res = axios({
            method: "POST",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
        });
        dispatch(createAction(
            actionType.SET_ME,
            res.data
        ));
    } catch (err) {
        console.log("error get user infor",{...err})
    } 
} 