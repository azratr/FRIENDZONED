const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  UnFollowUser,
  getAllUsers,
} = require("../controllers/UserController");

const authMiddleWare = require("../middleware/authMiddleware")

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id",authMiddleWare, updateUser);
router.delete("/:id",authMiddleWare, deleteUser);
router.put("/:id/follow",authMiddleWare, followUser);
router.put("/:id/unfollow",authMiddleWare, UnFollowUser);
module.exports = router;
