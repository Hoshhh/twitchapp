import axios from "axios";


const token = 'jkomtwf1ittuqjtfxym2igwo8u38na'
let api = axios.create({
    headers: {
        'Client-ID': '58wc6239ajg6k64g68fiild7mksvnw',
        'Authorization' : 'Bearer ' + token
    }
})

export default api;

