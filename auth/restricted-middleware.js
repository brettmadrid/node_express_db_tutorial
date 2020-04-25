module.exports = (req, res, next) => {
  // check if the client is logged in already
  // if so, call next()
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Sorry dude.  Not logged in!" });
  }
};
