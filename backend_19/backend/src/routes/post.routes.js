const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/create', (req, res) => {

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    res.send({
        message: 'post created'
    })

    jwt.verify(token, process.env.JWT_SERECT)
    
})

module.exports = router