const authService = require('../../grpc/client/auth/auth-service-client')

module.exports = {
    defineUser: async (req, res, next) => {
        const token = req.headers['authorization'].replace('Bearer ', '')
        authService.get(token, (err, response) => {
            if (!response.id || response.id === "") {
                res.status(401).json({ error: { msg: 'Unautorized' } });
                return
            } else {
                req.user = response
                next()
            }
        })
    },
    defineId: async (req, res, next) => {
        const token = req.headers['authorization'].replace('Bearer ', '')
        authService.getId(token, (err, response) => {
            if (!response.id || response.id === "") {
                res.status(401).json({ error: { msg: 'Unautorized' } });
                return
            } else {
                req.userId = response
                next()
            }
        })
    },
}