const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.get("/logout", authController.logout);
router.get("/isLoggedIn", authController.isLoggedIn, (req, res) => {
  res.send(200);
});
router.post(
  "/login",
  (req, res, next) => {
    console.log(req.user);
    next();
  },
  authController.login
);
router.post(
  "/register",
  (req, res, next) => {
    console.log(req.user);
    next();
  },
  userController.register,
  authController.login
);

module.exports = router;
