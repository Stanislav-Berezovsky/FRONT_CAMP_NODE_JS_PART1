const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;        

const routes = require('./routes');
routes(router);
app.use('/api', router);

app.set('view engine', 'pug');
app.set('views', './');
app.get('/', (req, res) => {
    res.render('index', {title: '[Welcome]', message: 'Hello there!'})
});


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    console.log(err);
});


app.listen(port);