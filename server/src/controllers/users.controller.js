const db = require("../entities");
const models = require("../models");
const dbUser = db.User;
//const User = models.User;

// Créer une nouvelle user
exports.create = (req, res) => {
    const model = {
        nom : req.body.nom
    };

    // Save Tutorial in the database
    dbUser.create(model)
        .then(data => {
            res.send({
                message: `Le user n°${data.id} a été ajouté`,
                data : data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la création de user."
            });
        });
};

// Récupérer la liste des users
exports.findAll = (req, res) => {
    dbUser.findAll()
        .then(data => {
            res.send({
                message: `Il y a ${data.length} user dans notre catalogue...`,
                data : data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la récupération des users."
            });
        });
};

// Récupérer une user
exports.findOne = (req, res) => {
    const id = req.params.id;

    dbUser.findByPk(id)
        .then(data => {
            res.send({
                message: `Le user n° ${id} a été trouvé`,
                data : data
            });
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Le user avec id=${id} n'a pas été trouvé !`
            });
        });
};

// Modifier une user
exports.update = (req, res) => {
    const id = req.params.id;
    const model = {
        id : id,
        nom : req.body.nom
    };
    dbUser.update(model, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Le user  n° ${id} a été modifié`
                });
            } else {
                res.send({
                    message: `Le user avec id=${id} n'a pas été trouvé !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Impossible de modifier la user avec id=${id} !`
            });
        });
};

// Supprimer une user
exports.delete = (req, res) => {
    const id = req.params.id;

    dbUser.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Le user  n° ${id} a été supprimé`
                });
            } else {
                res.send({
                    message: `Le user avec id=${id} n'a pas été trouvé !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Impossible de supprimer la user avec id=${id}!`
            });
        });
};