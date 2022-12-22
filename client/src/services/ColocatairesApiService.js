import axios from 'axios';

const __BASE_URL = 'http://localhost:8080/api';

const __HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getColocataireApi = (async () => {
    return await axios(__BASE_URL + '/colocataires', {
        method: 'get',
        headers: __HEADERS
    });
});

export const postColocataireApi = (async (colocataire) => {
    // Declaration d'un FormData (pour le body de la request)
    
    let bodyFormData = new FormData();
    for (var key in colocataire) {
        bodyFormData.append(key, colocataire[key]);
    }
    /*
    let bodyFormData = new FormData();
    // Ajout des elements au formulaire
    //bodyFormData.append('Key','Value')
    bodyFormData.append('title', colocataire.title);
    bodyFormData.append('firstname', colocataire.firstname);
    bodyFormData.append('lastname', colocataire.lastname);
    bodyFormData.append('dateOfBirth', colocataire.dateOfBirth);
    bodyFormData.append('phone', colocataire.phone);
    bodyFormData.append('email', colocataire.email);
    bodyFormData.append('img', colocataire.img);
*/
    return await axios({
        method: "post",
        url: __BASE_URL + "/colocataires",
        data: colocataire,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const updateColocataireApi = (async (colocataire) => {
    console.table(colocataire);
    // Declaration d'un FormData (pour le body de la request)

    let bodyFormData = new FormData();
    for (var key in colocataire) {
        bodyFormData.append(key, colocataire[key]);
    }
    /*
    let bodyFormData = new FormData();
    // Ajout des elements au formulaire
    //bodyFormData.append('Key','Value')
    bodyFormData.append('id', parseInt(colocataire.id));
    bodyFormData.append('title', colocataire.title);
    bodyFormData.append('firstname', colocataire.firstname);
    bodyFormData.append('lastname', colocataire.lastname);
    bodyFormData.append('dateOfBirth', colocataire.dateOfBirth);
    bodyFormData.append('urlImg', colocataire.urlImg);
    bodyFormData.append('phone', colocataire.phone);
    bodyFormData.append('email', colocataire.email);
    bodyFormData.append('created', colocataire.created);
*/
    return await axios({
        method: "put",
        url: __BASE_URL + "/colocataires/" + colocataire.id,
        data: bodyFormData,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});

export const deleteColocataireApi = (async (id) => {
    return await axios({
        method: "delete",
        url: __BASE_URL + "/colocataires/" + id,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});

export const postImage = (async (id, image) => {

    let bodyFormData = new FormData();

    bodyFormData.append('img', image);

    return await axios({
        method: "post",
        url: __BASE_URL + "/colocataires/" + id,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});

