const db = require("../entities");
const models = require("../models");
const dbColocataire = db.Colocataire;
//const Colocataire = models.Colocataire;

// Créer une nouvelle colocataire
exports.create = (req, res) => {
    //console.log(req);
    const model = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        id_colocation : req.body.id_colocation,
    };
    //console.log(model);
    // Save Tutorial in the database
    dbColocataire.create(model)
        .then(data => {
            res.send({
                message: `Le colocataire n°${data.id} a été ajouté`,
                data : data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la création de colocataire."
            });
        });
};

// Récupérer la liste des colocataires
exports.findAll = (req, res) => {
    dbColocataire.findAll()
        .then(data => {
            res.send({
                message: `Il y a ${data.length} colocataire dans notre catalogue...`,
                data : data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la récupération des colocataires."
            });
        });
};

// Récupérer une colocataire
exports.findOne = (req, res) => {
    const id = req.params.id;

    dbColocataire.findByPk(id)
        .then(data => {
            res.send({
                message: `Le colocataire n° ${id} a été trouvé`,
                data : data
            });
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Le colocataire avec id=${id} n'a pas été trouvé !`
            });
        });
};

// Modifier une colocataire
exports.update = (req, res) => {
    const id = req.params.id;
    const model = {
        id : id,
        nom : req.body.nom,
        prenom : req.body.prenom,
        id_colocation : req.body.id_colocation,
    };
    dbColocataire.update(model, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Le colocataire  n° ${id} a été modifié`
                });
            } else {
                res.send({
                    message: `Le colocataire avec id=${id} n'a pas été trouvé !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Impossible de modifier la colocataire avec id=${id} !`
            });
        });
};

// Supprimer une colocataire
exports.delete = (req, res) => {
    const id = req.params.id;

    dbColocataire.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Le colocataire  n° ${id} a été supprimé`
                });
            } else {
                res.send({
                    message: `Le colocataire avec id=${id} n'a pas été trouvé !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Impossible de supprimer la colocataire avec id=${id}!`
            });
        });
};