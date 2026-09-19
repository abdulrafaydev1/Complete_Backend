const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/create', (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }



    try {
        jwt.verify(token, process.env.JWT_SERECT)
    } catch (error) {
        return res.status(401).json({
            message: 'token sahi nahi hai'
        })
    }


    res.send({ message: 'post created' })
})

module.exports = router