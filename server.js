const path = require("path");
const express = require("express");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const session = require("express-session");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const hbs = exphbs.create({});

// Table generation
// const Models = require("./models");

const app = express();
const PORT = process.env.PORT || 3002;

// Sessions
const sess = {
  secret: "Shhh keep it a secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at PORT ${PORT} 👏`));
});
