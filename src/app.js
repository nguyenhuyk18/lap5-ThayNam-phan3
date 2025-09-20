// framework express
const express = require('express');
// bodyparser để lấy dữ liệu từ form
const bodyParser = require('body-parser');
// session
const session = require('express-session');
// nơi lưu trữ session
const FileStore = require('session-file-store')(session);
// nơi điều hành chính
const app = express();
// .env
require('dotenv').config();
// cookie
const cookieParser = require('cookie-parser');
// connect-mongo
const MongoStore = require('connect-mongo');

// Set up session
app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://root:example@localhost:27018/LapNam?authSource=admin' }),
    secret: 'phattrienungdunghihi',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: false
    }
}));

// nơi để import middleware
// const checkLoginAdminSite = require('./middlewares/checkLoginAdminSite');
app.use(cookieParser());

const port = process.env.PORT || 6969;

// set up ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// các file tỉnh cố định
app.use(express.static('public'));

// app.use();
// app.locals.user = null



const IndexRouter = require('./routers/IndexRouters')
app.use('/', IndexRouter);

const SupplierRouters = require('./routers/SupplierRouters');
app.use('/', SupplierRouters);


const ProductRouters = require('./routers/ProductRouters');
const { handleError } = require('./middlewares/errorHandler');
app.use('/', ProductRouters);


// app.use((req, res, next) => {
//     req.localTmp = app.locals
//     next();
// })

// // login bên admin
// app.use((req, res, next) => {
//     app.locals.login = req.session.userId || null;
//     next();
// });

app.use(handleError);

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
});