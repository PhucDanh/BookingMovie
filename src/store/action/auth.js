import { actionType } from "../type/type";
import { createAction } from "../action/action"
import { request } from "../../api/request";


export const signIn = (userLogin, callBack) => {
    return (dispatch) => {
        request({
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
            localStorage.setItem("tokenSignIn", res.data.content.accessToken);
            callBack();
        }).catch((err) => {
            console.log("error sign in",{...err});
            alert(err.response.data.content);
        })
    }
}

export const fetchMe = async (dispatch) => {
    try {
        const res = await request({
            method: "POST",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        });
        console.log(res);
        dispatch(createAction(
            actionType.SET_ME,
            res.data.content
        ));
    } catch (err) {
        console.log("error get user infor",{...err})
    } 
} 