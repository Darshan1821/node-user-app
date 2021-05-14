const path = require('path');

const express = require('express');

const app = express();

const userRoutes = require('./routes/user');
const rootDir = require('./util/path-helper');

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(userRoutes);

app.use((req, res, next) => res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html')));

app.listen(3000);