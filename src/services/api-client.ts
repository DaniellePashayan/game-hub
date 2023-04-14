import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'a3c631b2c9204122bb228da10cc334db'
    }
})