import axios from 'axios';

// this is a minimalist service worker for get requests

function getRequest(url) {
    return axios.get(url, {headers: {Authorization: "Bearer " + localStorage.token }});
}

export default async function getWithServiceWorker(url, localStorageAddress) {

    try {
        let resp = await getRequest(url);
        // all requests are now complete
        if (resp.status == 200) {
            localStorage.setItem(localStorageAddress, JSON.stringify(resp.data));
            return resp.data;
        }
        else {
            throw "Wrong response code";
        }
    }
    catch {
        console.log(localStorage.getItem(localStorageAddress));
        return JSON.parse(localStorage.getItem(localStorageAddress));
    }
}