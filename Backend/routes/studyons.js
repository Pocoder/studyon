const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const User = require('../models/user');
const Studyons = require('../models/studyon');
const Discussion = require('../models/discussion');
var authenticate = require('../authenticate');

const studyonRouter = express.Router();

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
                studyon.members.push(req.user._id);
                return studyon.save();
            }, (err)=>next(err))
            .then((studyon) => {
                Discussion.create({title: 'general'})
                    .then((discussion) => {
                        studyon.discussions.push(discussion._id);
                        return studyon.save();
                    }, (err) => next(err))
                    .then((studyon) => {
                        User.findById(req.user._id)
                            .then((user) => {
                                user.studyons.push(studyon._id);
                                return user.save();
                            }, (err) => next(err))
                            .then((user) => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(studyon);
                            }, (err) => next(err))
                    })
            }, (err) => next(err))
            .catch((err) => next(err));
    })

studyonRouter.route('/:studyonId')
    .options(cors.corsWithOptions, authenticate.verifyUser, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req,res,next) => {
        Studyons.findById(req.params.studyonId)
            .populate('members')
            .populate('discussions')
            .populate('discussions.messages')
            .populate('discussions.messages.author')
            .then((studyon) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(studyon);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

studyonRouter.route('/:studyonId/chats/:chatId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Discussion.findById(req.params.chatId)
            .populate('discussions.messages')
            .then((discussion) => {
                if (discussion != null) {
                    req.body.author = req.user._id;
                    discussion.messages.push(req.body);
                    discussion.save()
                        .then((discussion) => {
                            Discussion.findById(discussion._id)
                                .populate('messages')
                                .populate('messages.author')
                                .then((discussion) => {
                                    res.statusCode = 200;
                                    res.setHeader('Content-Type', 'application/json');
                                    res.json(discussion);
                                })
                        }, (err) => next(err));
                }
                else {
                    err = new Error('Discussion ' + req.params.chatId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = studyonRouter;
