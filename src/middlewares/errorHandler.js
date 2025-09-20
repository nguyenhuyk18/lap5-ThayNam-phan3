const handleError = (err, req, res, next) => {

    const path = req.originalUrl

    // String
    if (path.startsWith('/api/')) {
        res.status(err.status || 500).json({ message: err.message });
        return;
    }

    res.status(err.status || 500).render('error', { title: 'ERROR OCCURED', message: err.message, stack: err.stack, status: err.status });
}

module.exports = {
    handleError
}

