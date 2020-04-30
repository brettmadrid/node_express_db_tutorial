const express = require("express");
const lessonsRouter = require("../Routes/lessons-routes");
const messagesRouter = require("../Routes/messages-routes");
const authRouter = require("../auth/auth-routes");
const usersRouter = require("../Routes/users-routes");
const restricted = require("../auth/restricted-middleware");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "I am Son of Hal and am always watching!" });
});

server.use("/api/auth", authRouter);
server.use("/api/lessons", restricted, lessonsRouter);
server.use("/api/messages", restricted, messagesRouter);
server.use("/api/users", restricted, usersRouter);

module.exports = server;
