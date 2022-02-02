import axios from "axios";


const token = 'pt74opp5159qu831zqvhte5ic8so98'
let api = axios.create({
    headers: {
        'Client-ID': '58wc6239ajg6k64g68fiild7mksvnw',
        'Authorization' : 'Bearer ' + token
    }
})

export default api;