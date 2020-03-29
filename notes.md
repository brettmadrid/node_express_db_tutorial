a RESTful Express app should provide for all the CRUD operations

            REST            |       non REST
                            |
GET     /api/users          |      /getUsers
                            |
POST    /api/users          |      /addUser
                            |
UPDATE  /api/users/:id      |      /updateUser
                            |
DELETE  /api/users/:id      |      /deleteUser

REST allows for more efficient Server Side Routing code

We will once again use knex
our queries in javascript are referred to as models:

function find() {
    return db('users');
}

function findById(id) {
  // return db('users').where({id: id}).first();
  return db('users').where({ id }).first();
  //first() returns the first entry in the db matching the query
}

function add(user) {
  db('users').insert(user)
  // insert returns an array of all inserted rows
  .then(id => {
    return findById(id[0]);
  });
}

function update(changes, id) {
}

function remove(id) {
}

after they are all written, we can export them as named exports

module.exports = {
  find,
  findById, 
  add, 
  update, 
  delete
}

then use them in our endpoints by requiring the file:

const User = require('./user-model.js');

router.get('/api/users', (req, res) => {
   User.find()
  .then(users => {
      res.json(users);
   })
   .catch( err => {
       console.log(err)
   });
});



