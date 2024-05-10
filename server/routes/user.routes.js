const Router = require("express");
const {
  loginUser,
  registerUser,
  checkUsername,
  getUser,
} = require("../controllers/user.controller");

const RegisterSchema = require("../validation/auth_validators");
const validate = require("../middlewares/validater.middleware");
const router = Router();

router.post("/login", loginUser);
router.post("/register", validate(RegisterSchema),registerUser);
router.get("/checkusername/:username", checkUsername);
router.get("/get", getUser);

module.exports = router;
