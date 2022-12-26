import axios from 'axios';

const __BASE_URL = 'http://localhost:8080/api';

const __HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const signUpApi = (async (user) => {
    return await axios({
        method: "post",
        url: __BASE_URL + "/users/signup",
        data: user,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const signInApi = (async (user) => {
    return await axios({
        method: "post",
        url: __BASE_URL + "/users/signin",
        data: user,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

