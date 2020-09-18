const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const User = require('../models/user');
const Studyons = require('../models/studyon');
var Discussion = require('../models/discussion');
var authenticate = require('../authenticate');

const myStudyonRouter = express.Router();

myStudyonRouter.use(bodyParser.json());

myStudyonRouter.get('/', authenticate.verifyUser, (req, res, next) => {
    User.findById(req.user._id)
        .populate('studyons')
        .then((user) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user.studyons);
        }, (err) => next(err))
        .catch((err) => next(err));
});

module.exports = myStudyonRouter;
