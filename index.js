const server = require("./api/server");

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`\n*** Server running on port ${PORT} ***\n`);
});
