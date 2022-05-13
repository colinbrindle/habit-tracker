const express = require("express");
const routes = require("./controllers");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server live at ${PORT}`);
});
