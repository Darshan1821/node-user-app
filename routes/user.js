
const express = require('express');

const userRoutes = express.Router();

const users = [];

userRoutes.get('/user', (req, res, next) => {
    res.render('add-user', { title : 'Add User', path : '/user' });
});

userRoutes.post('/user', (req, res, next) => {
    users.push( { username: req.body.username });
    res.redirect('/');
});

userRoutes.get('/', (req, res, next) => {
    res.render('users',  { users : users, title : 'Users', path : '/'  });
});

exports.routes = userRoutes;