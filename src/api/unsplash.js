import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 9ICekN6MX3vK8dF2B1OxfcewameBXL-bdh3eV-7Cs3g'
    }
});