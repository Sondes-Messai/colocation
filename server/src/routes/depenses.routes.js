module.exports = app => {
  const controller = require("../controllers/depenses.controller.js");

  var router = require("express").Router();

  // Créer une nouvelle dépense
  router.post("/", controller.create);

  // Récupérer la liste des dépenses
  router.get("/", controller.findAll);

  // Récupérer une dépense
  router.get("/:id", controller.findOne);

  // Modifier une dépense
  router.put("/:id", controller.update);

  // Supprimer une dépense
  router.delete("/:id", controller.delete);

  app.use('/api/depenses', router);
};