//a440320973db39fc00de6bdcb4604c9b
//base: http://api.themoviedb.org/3/

import axios from 'axios';

const api = axios.create({
    baseURL:'http://api.themoviedb.org/3/'
})

export default api