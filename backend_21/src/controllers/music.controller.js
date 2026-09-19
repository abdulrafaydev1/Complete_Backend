const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')

const createMusic = async (req, res) => {


    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    
    
}