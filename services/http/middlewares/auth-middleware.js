const authService = require('../../grpc/client/auth-service-client')

module.exports = {
    api: async (req, res, next) => {
        if (!req.headers['authorization']) {
            res.status(400).json({ error: { msg: 'Bad request' } });
            return
        }

        const token = req.headers['authorization'].replace('Bearer ', '')
        authService.validate(token, (err, response) => {
            if (!response.valid) {
                res.status(401).json({ error: { msg: 'Unautorized' } });
                return
            } else {
                next()
            }
        })
    }
}