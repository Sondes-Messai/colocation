const db = require("../entities");
const dbColocataire = db.Colocataire;

// Ajouter un colocataire
exports.create = (req, res) => {
    //console.log(req);
    const model = req.body;
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
    const model = req.body;
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