import axios from 'axios';

// this is a minimalist service worker for get requests
// url: the url to call the api, should begin with http:// or http://
// method: the method used in the request, example: "get"
// localStorageAddress: the key used to store the data, must be unique
async function getWithServiceWorker(url, method, localStorageAddress) {
    try {
        let resp = await {"get": getRequest, "post": postRequest}[method](url);
        // all requests are now complete
        if (resp.status == 200) {
            if (method == "get") {
                localStorage.setItem(localStorageAddress, JSON.stringify(resp.data));
            }
            return resp.data;
        }
        else {
            throw "Wrong response code";
        }
    }
    catch {
        if (method == "get") {
            return JSON.parse(localStorage.getItem(localStorageAddress));
        }
        else {
            return null;
        }
    }
}

function getRequest(url) {
    return axios.get(url, {headers: {Authorization: "Bearer " + localStorage.token }});
}

function postRequest(url, formdata) {
    return axios.post(url, formdata,{headers: {Authorization: "Bearer " + localStorage.token }});
}

function deleteRequest(url, formdata) {
    return axios({url: url, method: 'delete', data: formdata, headers: {Authorization: "Bearer " + localStorage.token}});
}

export default {getWithServiceWorker, postRequest, deleteRequest}

