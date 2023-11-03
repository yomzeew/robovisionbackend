var express = require('express');
const Control = require('../controllers/controller');
var router = express.Router();

/* GET home page. */
router.post('/getrecord',Control.GetRecord)


module.exports = router;
