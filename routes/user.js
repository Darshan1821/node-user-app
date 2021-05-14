const path = require('path');

const express = require('express');

const userRoutes = express.Router();
const rootDir = require('../util/path-helper');

userRoutes.get('/user', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

userRoutes.post('/user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

userRoutes.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = userRoutes;