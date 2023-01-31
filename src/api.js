import axios from "axios";


const token = 'hz4hg4ypkw5mbm6ixksjqwje9ffl1x'
let api = axios.create({
    headers: {
        'Client-ID': '58wc6239ajg6k64g68fiild7mksvnw',
        'Authorization' : 'Bearer ' + token
    }
})

export default api;

