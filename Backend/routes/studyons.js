const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const User = require('../models/user');
const Studyons = require('../models/studyon');
var authenticate = require('../authenticate');

const studyonRouter = express.Router();

studyonRouter.options('*', cors.corsWithOptions, (req, res, next) => { res.sendStatus(200); } )
studyonRouter.use(bodyParser.json());

studyonRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req,res,next) => {
        Studyons.find(req.query)
            .then((studyons) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(studyons);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Studyons.create(req.body)
            .then((studyon) => {
                studyon.members.push(req.user.username);
                return studyon.save();
            }, (err) => next(err))
            .then((studyon) => {
                return User.findById(req.user._id)
            }, (err) => next(err))
            .then((user) => {
                user.studyons.push(studyon.title);
                return user.save();
            }, (err)=> next(err))
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(studyon);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /studyons');
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Studyons.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

studyonRouter.route('/:studyonId')
    .options(cors.corsWithOptions, authenticate.verifyUser, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req,res,next) => {
        Studyons.findById(req.params.studyonId)
            .then((studyon) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(studyon);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Studyons.create(req.body)
            .then((studyon) => {
                studyon.members.push(req.user.username);
                return studyon.save();
            }, (err) => next(err))
            .then((studyon) => {
                return User.findById(req.user._id)
            }, (err) => next(err))
            .then((user) => {
                user.studyons.push(studyon.title);
                return user.save();
            }, (err)=> next(err))
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(studyon);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /studyons');
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Studyons.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = studyonRouter;
