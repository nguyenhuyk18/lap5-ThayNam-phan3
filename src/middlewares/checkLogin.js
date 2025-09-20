checkLogin = (req, res, next) => {
    const user = req.session.user || null;

    const path = req.originalUrl

    // String


    if (!user) {

        if (path.startsWith('/api/')) {
            res.status(500).json({ message: 'Không có thẩm quyền để thực hiện chức năng này, đi raaaa !!!' });
            return;
        }

        res.render('error', { error: 'KHÔNG CÓ THẨM QUYỀN ĐỂ VÀO ĐÂY ĐI RAAAAAA !!!!' })
        return;
    }

    next();
}

module.exports = checkLogin