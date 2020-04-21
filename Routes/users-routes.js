const express = require("express");
const Lessons = require("../models/dbHelpers");

const router = express.Router();

// for all endpoints beginning with /api/users
router.post("/register", (req, res) => {
  const credentials = req.body;
  const { username, password } = credentials;

  if (!(username && password)) {
    return res.status(400).json({ message: "Username and password required" });
  }

  Lessons.addUser(credentials)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      if (error.errno == 19) {
        res.status(400).json({ message: "Username already taken" });
      } else {
        res.status(500).json(error);
      }
    });
});

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
