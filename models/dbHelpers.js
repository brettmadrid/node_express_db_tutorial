const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById,
  remove,
  update,
  addMessage,
  findLessonMessages,
  removeMessage,
  addUser,
  findAllUsers,
  findUserByUsername,
};

async function addUser(user) {
  return await db("users").insert(user, ["id", "username"]);
}

function findAllUsers() {
  return db("users");
}

function findUserByUsername(username) {
  return db("users").where({ username }).first();
}

async function add(lesson) {
  return await db("lessons").insert(lesson, ["id", "name"]);
  // const [id] = await db("lessons").insert(lesson);
  // return findById(id);
}

function find() {
  return db("lessons");
}

function findById(id) {
  return db("lessons").where({ id }).first();
}

function remove(id) {
  return db("lessons").where({ id }).del();
}

function update(id, changes) {
  return db("lessons")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function findMessageById(id) {
  return db("messages").where({ id }).first();
}

async function addMessage(message, lesson_id) {
  return await db("messages").where({ lesson_id }).insert(message, ["id"]);
  // const [id] = await db("messages").where({ lesson_id }).insert(message);
  // return findMessageById(id);
}

function findLessonMessages(lesson_id) {
  return db("lessons as l")
    .join("messages as m", "l.id", "m.lesson_id")
    .select(
      "l.id as LessonID",
      "l.name as LessonName",
      "m.id as MessageID",
      "m.sender",
      "m.text"
    )
    .where({ lesson_id });
}

function removeMessage(id) {
  return db("messages").where({ id }).del();
}
