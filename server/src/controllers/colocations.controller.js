const db = require("../entities");
const dbColocation = db.Colocation;

// Créer une nouvelle dépense
exports.create = (req, res) => {
    const model = {
        nom : req.body.nom
    };

    // Save Tutorial in the database
    dbColocation.create(model)
        .then(data => {
            res.send({
                message: `Le groupe de colocation n°${data.id} a été ajouté`,
                data : data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la création de dépense."
            });
        });
};

// Récupérer la liste des dépenses
exports.findAll = (req, res) => {
    dbColocation.findAll()
        .then(data => {
            res.send({
                message: `Il y a ${data.length} groupe de colocation dans notre catalogue...`,
                data : data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur s'est produite lors de la récupération des dépenses."
            });
        });
};

// Récupérer une dépense
exports.findOne = (req, res) => {
    const id = req.params.id;

    dbColocation.findByPk(id)
        .then(data => {
            res.send({
                message: `Le groupe de colocation n° ${id} a été trouvé`,
                data : data
            });
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Le groupe de colocation avec id=${id} n'a pas été trouvé !`
            });
        });
};

// Modifier une dépense
exports.update = (req, res) => {
    const id = req.params.id;
    const model = {
        id : id,
        nom : req.body.nom
    };
    dbColocation.update(model, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Le groupe de colocation  n° ${id} a été modifié`
                });
            } else {
                res.send({
                    message: `Le groupe de colocation avec id=${id} n'a pas été trouvé !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Impossible de modifier la dépense avec id=${id} !`
            });
        });
};

// Supprimer une dépense
exports.delete = (req, res) => {
    const id = req.params.id;

    dbColocation.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Le groupe de colocation  n° ${id} a été supprimé`
                });
            } else {
                res.send({
                    message: `Le groupe de colocation avec id=${id} n'a pas été trouvé !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Impossible de supprimer la dépense avec id=${id}!`
            });
        });
};