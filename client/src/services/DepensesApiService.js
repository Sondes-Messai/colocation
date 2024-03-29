import axios from 'axios';

const __BASE_URL = 'http://localhost:8080/api';

const __HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getDepensesApi = (async () => {
    return await axios(__BASE_URL + '/depenses', {
        method: 'get',
        headers: __HEADERS
    });
});

export const postDepenseApi = (async (depense) => {
    return await axios({
        method: "post",
        url: __BASE_URL + "/depenses",
        data: depense,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const updateDepenseApi = (async (depense) => {
    return await axios({
        method: "put",
        url: __BASE_URL + "/depenses/" + depense.id,
        data: depense,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});

export const deleteDepenseApi = (async (id) => {
    return await axios({
        method: "delete",
        url: __BASE_URL + "/depenses/" + id,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});

