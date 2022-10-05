const express = require("express");
const userController = require("../../controller/user.controller");

const router = express.Router();

router.route("/random").get(userController.getRandomUser);
router.route("/all").get(userController.getAllUsers);
router.route("/save").post(userController.saveAUser);
router.route("/update/:id").patch(userController.updateUser);
router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;
