module.exports = app => {
  const controller = require("../controllers/users.controller.js");

  var router = require("express").Router();

  router.post("/signup", controller.signup);

  router.post("/signin", controller.signin);

  app.use('/api/users', router);
};