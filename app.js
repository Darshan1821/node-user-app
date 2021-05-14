const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const rootDir = require('./util/path-helper');

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(userRoutes.routes);

app.use((req, res, next) => res.status(404).render('page-not-found', { title : 'Page Not Found !!', path : '/404' }));

app.listen(3000);