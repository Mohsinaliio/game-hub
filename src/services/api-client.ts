import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9056286c853b46d8b0f598fc3cdc0f4b'
    }
})