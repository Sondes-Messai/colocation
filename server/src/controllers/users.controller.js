const db = require('../entities')
const dbUser = db.User

// Créer un utilisateur
exports.signup = (req, res) => {
    const model = req.body
    console.log(model)
    dbUser
        .create(model)
        .then((data) => {
            res.send({
                message: `Le user n°${data.id} a été ajouté`,
                data: data,
            })
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Une erreur s'est produite lors de la création de user.",
            })
        })
}

// Récupérer la liste des users
exports.signin = (req, res) => {
    const model = req.body
    dbUser
        .findAll({
            where: { email: model.email, mdp: model.mdp },
        })
        .then((data) => {
            if (data.length == 0) {
                res.status(500).send({
                    message: `Il y a ${data.length} user dans notre catalogue...`,
                })
            } else {
                res.send({
                    message: `Il y a ${data.length} user dans notre catalogue...`,
                    data: data,
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Une erreur s'est produite lors de la récupération des users.",
            })
        })
}
