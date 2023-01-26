import axios from "axios";
import loacl from "@/utile/loacl";

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_URL,
});
service.interceptors.request.use(
    (suress) => {
        const token = loacl.getCache('token')
        if (token != 'undefined') {
            suress.headers = {
                Authorization: `Bearer ${token}`
            }
        }
        return suress;
    },
    (erro) => {
        return erro;
    }
);
service.interceptors.response.use(
    (suress) => {
        return suress.data
    },
    (erro) => {
        return erro;
    }
);
export default service;