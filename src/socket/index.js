import { io } from "socket.io-client";
import config from "../config.json";

const socket = io(config.serverSocket);


socket.on("connect", (socket) => {
    console.log(socket.id);
});