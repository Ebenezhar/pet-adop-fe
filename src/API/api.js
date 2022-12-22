import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: "https://pet-adop-be.vercel.app"

})



export default instance;