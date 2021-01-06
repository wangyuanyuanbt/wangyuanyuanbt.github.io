import axios from "axios";
let service = null;
service = axios.create({
    timeout: 10000,
});
// request拦截器
service.interceptors.request.use(
    (config) => {
        if (config.url !== "/user/botuLogin" || config.url !== "/shopx5/seller/add") {
            if (config.method === "post") {
                config.params = {
                    ...config.params,
                    token: sessionStorage.getItem("TOKEN") || "",
                };
            } else if (config.method === "get") {
                config.params = {
                    ...config.params,
                    token: sessionStorage.getItem("TOKEN") || "",
                };
            }
        }
        config.headers["Content-Type"] = "application/json;charset=UTF-8";
        return config;
    },
    (error) => {
        console.log("error", error);
        Promise.reject(error);
    }
);
// respone拦截器
service.interceptors.response.use(
    (response) => {
        console.log("response", response.data);
        return response.data;
    },
    (error) => {
        let errorData = JSON.parse(JSON.stringify(error));
        console.log("errorData", errorData);
        if (errorData && errorData.response) {
            return {
                code: errorData.status,
                status: errorData.status,
                message: errorData.statusText,
            };
        } else {
            return {
                code: 404,
                status: 404,
                message: 404,
            };
        }
    }
);

export {
    service
};
