const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");

// Table generation
// const Models = require("./models");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at PORT ${PORT} 👏`));
});
