import axios from "axios";

let token = null;

if (localStorage.getItem("token") != null) {
    token = "Bearer " + localStorage.getItem("token");
}

const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
        Authorization: token,
    },
});

export default instance;
