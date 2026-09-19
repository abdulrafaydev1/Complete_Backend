const express = require('express')

const router = express.Router()

router.post('/create', (req, res) => {

    const token = req.cookies.token

    if(!token){
        return res.status(400).json({
            message: "Unauthorized"
        })
    }

    res.send({
        message: 'post created'
    })
    
})

module.exports = router