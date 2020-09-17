var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var Studyon = require('../models/studyon');

var authenticate = require('../authenticate');
var cors = require('./cors');

const studyonRouter = express.Router();

router.options('*', cors.corsWithOptions, (req, res, next) => { res.sendStatus(200); } )
router.use(bodyParser.json());

module.exports = router;
