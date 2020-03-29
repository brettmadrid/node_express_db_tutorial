// where we write our knex queries
const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
  add,
  find
};

async function add(lesson) {
  const [id] = await db("lessons").insert(lesson);

  return id;
}

function find() {
  return db("lessons");
}
