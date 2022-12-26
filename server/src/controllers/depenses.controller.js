const db = require('../entities')
const dbDepense = db.Depense
const dbPayment = db.Payment
const dbDepenseGroupe = db.DepenseGroupe

// Créer une nouvelle dépense
exports.create = (req, res) => {
  var depense = req.body;
  
  dbDepense
    .create(req.body, {
      include: [dbPayment],
    })
    .then((data) => {
      res.send({
        message: `Le depense n°${data.id} a été ajouté`,
        data: data,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de dépense.",
      })
    })
}

// Récupérer la liste des dépenses
exports.findAll = (req, res) => {
  dbDepense
    .findAll({
      include: [{ model: dbDepenseGroupe, as: 'categorie' }],
    })
    .then((data) => {
      res.send({
        message: `Il y a ${data.length} depense dans notre catalogue...`,
        data: data,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des dépenses.",
      })
    })
}

// Récupérer une dépense
exports.findOne = (req, res) => {
  const id = req.params.id

  dbDepense
    .findByPk(id)
    .then((data) => {
      res.send({
        message: `Le dépense n° ${id} a été modifié`,
        data: data,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: `La dépense avec id=${id} n'a pas été trouvé !`,
      })
    })
}

// Modifier une dépense
exports.update = (req, res) => {
  const id = req.params.id
  var depense = req.body
  const depenseCreated = new Depense(
    id,
    depense.idCategory,
    depense.title,
    depense.amount,
    depense.date,
    depense.frequency,
  )
  dbDepense
    .update(depenseCreated, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Le dépense n° ${id} a été modifié`,
        })
      } else {
        res.send({
          message: `La dépense avec id=${id} n'a pas été trouvé !`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Impossible de modifier la dépense avec id=${id} !`,
      })
    })
}

// Supprimer une dépense
exports.delete = (req, res) => {
  const id = req.params.id
  dbPayment.destroy({
    where: { id_depense: id }
  })
  .then((i) => {


  })
  .catch((err) => {
    res.status(500).send({
      message: `Impossible de supprimer la dépense avec id=${id}!`,
    })
  });
  dbDepense
    .destroy({
      where: { id: id },
      include: [dbPayment]
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Le dépense n° ${id} a été supprimé`,
        })
      } else {
        res.send({
          message: `La dépense avec id=${id} n'a pas été trouvé !`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Impossible de supprimer la dépense avec id=${id}!`,
      })
    })
}
