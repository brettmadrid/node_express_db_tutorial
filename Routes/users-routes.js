const express = require("express");
const Lessons = require("../models/dbHelpers");

const router = express.Router();

//All endpoints are for /api/users
router.post("/register", (req, res) => {
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 12);
  credentials.password = hash;

  Lessons.addUser(credentials)

    .then((lesson) => {
      res.status(200).json(lesson);
    })
    .catch((error) => {
      res.status(500).json({ message: "cannot add lesson" });
    });
});

module.exports = router;
