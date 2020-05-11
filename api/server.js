const express = require('express')
const session = require('express-session')

const lessonsRouter = require('../Routes/lessons-routes')
const messagesRouter = require('../Routes/messages-routes')
const authRouter = require('../auth/auth-routes')
const usersRouter = require('../Routes/users-routes')
const restricted = require('../auth/restricted-middleware')

const server = express()

const sessionConfig = {
  name: 'monster',
  secret: 'give me cake or give me death',
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 hour
    secure: false, // true in production to send only over https
    httpOnly: true, // true means no access from JS
  },
  resave: false,
  saveUnitialized: true, // false in production due to GDPR laws come from client
}

server.use(express.json())
server.use(session(sessionConfig))

server.get('/', (req, res) => {
  res.json({ message: 'I am Son of Hal and am always watching!' })
})

server.use('/api/lessons', restricted, lessonsRouter)
server.use('/api/messages', restricted, messagesRouter)
server.use('/api/auth', authRouter)
server.use('/api/users', restricted, usersRouter)

module.exports = server
