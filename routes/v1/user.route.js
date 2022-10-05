const express = require("express");
const userController = require("../../controller/user.controller");

const router = express.Router();

router.route("/random").get(userController.getRandomUser);
router.route("/all").get(userController.getAllUsers);

module.exports = router;
