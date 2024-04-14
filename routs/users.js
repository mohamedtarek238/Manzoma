const { default: userController } = require("../controllers/userController.js");
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", userController.updateUser)

//delete user
router.delete("/:id", userController.deleteUser)

//get a user
router.get("/:id", userController.getOneUser);



module.exports = router;