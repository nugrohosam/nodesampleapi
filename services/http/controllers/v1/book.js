const router = require('express').Router();
const book = require('../../../../usecases/book');
const bookUsecases = require('../../../../usecases/book')

router.get('/', (req, res) => {
    userId = req.userId
    bookUsecases.getAllData(userId)
});

router.get('/:bookID', (req, res) => {
    res.send("Get Success")
});

module.exports = router;