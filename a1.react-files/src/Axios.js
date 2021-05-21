import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': "application/json",
        'Authorization': "Bearer " + localStorage.getItem("token")
    },
    validateStatus: function (status) {
        return status >= 200 && status < 400
      }
});
export default instance;
