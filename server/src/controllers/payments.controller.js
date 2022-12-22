const db = require('../entities')
const models = require('../models')
const dbPayment = db.Payment
const dbDepense = db.Depense
const dbDepenseGroupe = db.DepenseGroupe
const dbColocataire = db.Colocataire
//const Payment = models.Payment;

// Créer une nouvelle payment
exports.create = (req, res) => {
  const model = {
    nom: req.body.nom,
  }

  // Save Tutorial in the database
  dbPayment
    .create(model)
    .then((data) => {
      res.send({
        message: `Le payment n°${data.id} a été ajouté`,
        data: data,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de payment.",
      })
    })
}

// Récupérer la liste des payments
exports.findAll = (req, res) => {
  dbPayment
    .findAll({
      include: [
        {
          model: dbDepense,
          as: 'depense',
          include: [{ model: dbDepenseGroupe, as: 'categorie' }],
        },
        { model: dbColocataire, as: 'colocataire' },
      ],
    })
    .then((data) => {
      res.send({
        message: `Il y a ${data.length} payment dans notre catalogue...`,
        data: data,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des payments.",
      })
    })
}

// Récupérer une payment
exports.findOne = (req, res) => {
  const id = req.params.id

  dbPayment
    .findByPk(id)
    .then((data) => {
      res.send({
        message: `Le payment n° ${id} a été trouvé`,
        data: data,
      })
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: `Le payment avec id=${id} n'a pas été trouvé !`,
      })
    })
}

// Modifier une payment
exports.update = (req, res) => {
  const id = req.params.id
  const model = {
    id: id,
    nom: req.body.nom,
  }
  dbPayment
    .update(model, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Le payment  n° ${id} a été modifié`,
        })
      } else {
        res.send({
          message: `Le payment avec id=${id} n'a pas été trouvé !`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Impossible de modifier la payment avec id=${id} !`,
      })
    })
}

// Supprimer une payment
exports.delete = (req, res) => {
  const id = req.params.id

  dbPayment
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Le payment  n° ${id} a été supprimé`,
        })
      } else {
        res.send({
          message: `Le payment avec id=${id} n'a pas été trouvé !`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Impossible de supprimer la payment avec id=${id}!`,
      })
    })
}
