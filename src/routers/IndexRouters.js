const express = require('express');
const router = express.Router();
const userModels = require('../models/User')
const bcrypt = require('bcrypt')

// const HomeController = require('../controllers/HomeController');
const { home, register, forget, login } = require('../services/HomeService');

router.get('/', (req, res, next) => {
    res.locals.user = req.session.user || null;

    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, home);

router.get('/login.html', (req, res, next) => {
    res.locals.user = req.session.user || null;

    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, login);
router.get('/register.html', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, register);

router.get('/forget-password.html', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, forget);


router.post('/register', async (req, res) => {
    console.log('ádasdasd')
    try {
        const { username, password } = req.body;
        // const user = new userModels({})
        await userModels.insertOne({ username: username, password: password });

        res.status(201).json({ message: 'Đăng ký tài khoản thành công !!!' });
        return;

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Đăng ký tài khoản không thành công !!!' });
        return;
    }
})

router.post('/login', async (req, res) => {
    // const body = req.body;
    try {
        const { username, password } = req.body;

        const rs = await userModels.findOne({ username: username });

        if (!rs) {
            res.status(404).json({ message: 'Không tìm thấy tài khoản !!!' });
            return;
        }

        if (!bcrypt.compareSync(password, rs.password)) {
            res.status(400).json({ message: 'Username hoặc password không đúng hãy thử lại !!!' });
            return;
        }

        req.session.user = rs;

        res.cookie('sid', req.sessionID, {
            maxAge: 60 * 60 * 1000,// 1h
            httpOnly: true,
            secure: false
        });

        res.status(201).json({ message: 'Chúc mừng bạn đã đăng nhập thành công !!!' });

        return;

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server bị lỗi thử lại sau !!!' });
        return;
    }

})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ error: 'Loutout Failed' });
    })
    // res.clearCookie('sid')
    // res.clearCookie('connect.sid');
    // res.status(201).json({ message: 'Logout Thành Công' })
    // delete req.locals.user
    res.redirect('/');
})

// Xuất router
module.exports = router;