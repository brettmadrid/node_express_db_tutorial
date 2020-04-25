const express = require("express");
const Lessons = require("../models/dbHelpers");

const router = express.Router();

// for all endpoints beginning with /api/users
router.get("/", (req, res) => {
  Lessons.findAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ message: "unable to retrieve users" });
    });
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  Lessons.findUserByUsername(username)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
