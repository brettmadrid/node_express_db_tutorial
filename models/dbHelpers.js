// where we write our knex queries
const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
  add,
  find,
  findById,
  remove,
  update,
  addMessage
};

async function add(lesson) {
  const [id] = await db("lessons").insert(lesson);
  return findById(id);
}

function find() {
  return db("lessons");
}

function findById(id) {
  return db("lessons")
    .where({ id })
    .first();
}

function remove(id) {
  return db("lessons")
    .where({ id })
    .del();
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
  return db("messages")
    .where({ id })
    .first();
}

async function addMessage(message, lesson_id) {
  const [id] = await db("messages")
    .where({ lesson_id })
    .insert(message);
  return findMessageById(id);
}
