const router = require("express").Router();

router.get("/habits", (req, res) => {
  console.log(`GET request logged`);
  res.json(`JSON response logged`);
});

module.exports = router;
