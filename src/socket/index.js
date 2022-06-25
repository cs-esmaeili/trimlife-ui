import { io } from "socket.io-client";
import config from "../config.json";
import { getCookie } from '../global/cookie';

export let socket = null;
export const connect = async () => {
    socket = await io(config.serverSocket, { auth: { token: getCookie('token') } });
    return true;
}