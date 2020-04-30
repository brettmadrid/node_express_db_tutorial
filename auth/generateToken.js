const jwt = require("jsonwebtoken");

module.exports = (user) => {
  // need 3 things: payload, secret, & options
  const payload = {
    id: user.id,
    username: user.username,
    // any other non-confidential data
  };

  const secret = process.env.SECRET;

  const options = {
    expiresIn: "1d", // security people in your company will specify
  };

  return jwt.sign(payload, secret, options);
};
