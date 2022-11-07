import axios from "axios";


const token = 'np33eme10w093fjur6bogaywa15tos'
let api = axios.create({
    headers: {
        'Client-ID': '58wc6239ajg6k64g68fiild7mksvnw',
        'Authorization' : 'Bearer ' + token
    }
})

export default api;

