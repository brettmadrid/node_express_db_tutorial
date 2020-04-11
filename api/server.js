const express = require("express");

const lessonsRouter = require("../Routes/lessons-routes");
const messagesRouter = require("../Routes/messages-routes");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "I am Son of Hal and am always watching!" });
});

server.use("/api/lessons", lessonsRouter);
server.use("/api/messages", messagesRouter);

module.exports = server;
