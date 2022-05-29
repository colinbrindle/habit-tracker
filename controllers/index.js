const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// router.get("/", async (req, res) => {
//   try {
//     console.log("GET request to default page received");

//     res.status(200).render("homepage");
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
