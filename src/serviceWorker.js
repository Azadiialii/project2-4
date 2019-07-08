import axios from 'axios';

// this is a minimalist service worker for get requests
// url: the url to call the api, should begin with http:// or http://
// method: the method used in the request, example: "get"
// localStorageAddress: the key used to store the data, must be unique
export default async function getWithServiceWorker(url, method, localStorageAddress) {

    try {
        let resp = await {"get": getRequest}[method](url);
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
        return JSON.parse(localStorage.getItem(localStorageAddress));
    }
}

function getRequest(url) {
    return axios.get(url, {headers: {Authorization: "Bearer " + localStorage.token }});
}