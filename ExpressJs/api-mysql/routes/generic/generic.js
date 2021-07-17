var express = require("express");
var router = express.Router();

// Controllers
var Impor = require("../../controllers/generic/generic");

/* Import. */
router.post("/import", async (req, res, next) => {
  let response = await Impor.ImportJSON(req);
  res.status(response.status).send(response);
});

module.exports = router;
