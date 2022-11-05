import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _GqKeHpP7qpRkEzOfz2LxR9ayPeVzJTaPkOahxy30UM'
    }
})