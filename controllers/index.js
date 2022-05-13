const router = require("express").Router();

router.get("/tracker", (req, res) => {
  console.log(`GET request logged`);
  res.json(`JSON response logged`);
});

module.exports = router;
