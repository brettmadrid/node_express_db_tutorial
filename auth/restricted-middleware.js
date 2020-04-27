module.exports = (req, res, next) => {
  console.log("req.session", req.session);
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Sorry dude/dudette, cannot let you in" });
  }
};
