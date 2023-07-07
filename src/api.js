import axios from "axios";

const token = "9guq99a18a6j88r34yip2tkjyqyifu"
let api = axios.create({
    headers: {
        'Client-ID': '58wc6239ajg6k64g68fiild7mksvnw',
        'Authorization' : 'Bearer ' + token
    }
})

export default api;

