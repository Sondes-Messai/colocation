module.exports = app => {
  const controller = require("../controllers/colocataires.controller.js");

  var router = require("express").Router();

  // Créer une nouvelle colocation
  router.post("/", controller.create);

  // Récupérer la liste des colocations
  router.get("/", controller.findAll);

  // Récupérer une colocation
  router.get("/:id", controller.findOne);

  // Modifier une colocation
  router.put("/:id", controller.update);

  // Supprimer une colocation
  router.delete("/:id", controller.delete);

  app.use('/api/colocataires', router);
};