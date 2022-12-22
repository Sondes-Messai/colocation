import axios from 'axios';

const __BASE_URL = 'http://localhost:8080/api';

const __HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getTransactionsApi = (async () => {
    return await axios(__BASE_URL + '/payments', {
        method: 'get',
        headers: __HEADERS
    });
});

export const postTransactionApi = (async (transaction) => {
    console.log(transaction);
    // Declaration d'un FormData (pour le body de la request)
    let bodyFormData = new FormData();
    for (var key in transaction) {
        bodyFormData.append(key, transaction[key]);
    }
    return await axios({
        method: "post",
        url: __BASE_URL + "/payments",
        data: bodyFormData,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const updateTransactionApi = (async (transaction) => {
    // Declaration d'un FormData (pour le body de la request)
    let bodyFormData = new FormData();
    for (var key in transaction) {
        bodyFormData.append(key, transaction[key]);
    }
    return await axios({
        method: "put",
        url: __BASE_URL + "/payments/" + transaction.id,
        data: bodyFormData,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});

export const deleteTransactionApi = (async (id) => {
    return await axios({
        method: "delete",
        url: __BASE_URL + "/payments/" + id,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});

