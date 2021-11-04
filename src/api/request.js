// đính token vào tất cả các request, 3 cách:
// 1. Đính từng cái
// 2. axios interceptor
// 3. tạo hàm request dùng chung

import axios from "axios"

export const request = ({method, url, data, params}) => {
    const variables = {
        method,
        url,
        data,
        params
    }

    const tokenSignIn = localStorage.getItem("tokenSignIn");
    const tokenCyberSoft = localStorage.getItem("tokenCyberSoft");

    if(tokenSignIn && tokenCyberSoft) {
        variables.headers = {
            Authorization: "Bearer " + tokenSignIn,
            TokenCybersoft: tokenCyberSoft,
        }
    } else if(tokenSignIn) {
        variables.headers = {
            Authorization: "Bearer " + tokenSignIn,
        }
    } else if(tokenCyberSoft) {
        variables.headers = {
            TokenCybersoft: tokenCyberSoft,
        }
    }

    console.log("variables axios",variables);

    return axios(variables);
}