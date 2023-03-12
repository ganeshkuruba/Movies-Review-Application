import axios from "axios";  

export default axios.create({
    baseURL: ' https://bc72-2406-7400-75-e4f3-a564-500d-a538-a7b0.in.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});