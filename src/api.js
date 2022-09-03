import axios from "axios";


const token = 'xq1xi9ndcgh4ti1uxd2brnownkmc2d'
let api = axios.create({
    headers: {
        'Client-ID': '58wc6239ajg6k64g68fiild7mksvnw',
        'Authorization' : 'Bearer ' + token
    }
})

export default api;

