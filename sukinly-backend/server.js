/** Start server for sukinly. */

const app = require('./app');
const { PORT } = require("./config");


app.listen(PORT, function () {
  console.log(`Server starting on port ${PORT}!`);
});