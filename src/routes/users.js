const express = require("express");
const { create, login, checkToken } = require("../controllers/users.js");
const ensureLoggedIn = require("../../config/ensureLoggedIn.js");
const router = express.Router();

router.get("/check-token", ensureLoggedIn, checkToken);

router.post("/", (req, res) => {
  create(req, res);
});

router.post("/login", login);

module.exports = router;
