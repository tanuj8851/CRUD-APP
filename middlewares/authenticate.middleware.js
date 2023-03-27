const jwt = require("jsonwebtoken")
const authenticate = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, "masai", (err, decoded) => {
            if (decoded) {
                // console.log(decoded)
                req.body.user = decoded.userId
                next()
            } else {
                res.send({ "msg": "Login Please first" })
            }
        })
    } else {
        res.send({ "msg": "Login Please first" })

    }
}


module.exports = {
    authenticate
}