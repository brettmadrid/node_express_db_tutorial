const jwt = require("jsonwebtoken");

module.exports = (user) => {
  // need 3 things to create a token: payload, secret, & options

  const payload = {
    id: user.id,
    username: user.username,
    // can add more non confidential data
  };

  const secret = process.env.SECRET;

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
};
