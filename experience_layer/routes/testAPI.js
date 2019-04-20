var express = require('express');
var router = express.Router();

router.get("/", (req, res, next) => {
    res.json({msg: "experience_layer is connected to client"});
});

module.exports = router;