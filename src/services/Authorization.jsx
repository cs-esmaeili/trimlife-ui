import http from "./httpServices";
import config from "../config.json";

export const _login = (data) => {
    return http.post(`${config.api_url}login`, JSON.stringify(data));
};

export const LogOut = (data) => {
    return http.post(`${config.api_url}logOut`, JSON.stringify(data));
};
export const _revokeToken = (data) => {
    return http.post(`${config.api_url}revokeToken`, JSON.stringify(data));
};