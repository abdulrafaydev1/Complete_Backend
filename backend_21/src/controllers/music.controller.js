const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')

const createMusic = async (req, res) => {


    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SERECT)

        if (decoded.role !== 'artist') {
            return res.status(403).json({
                message: 'Forbideen'
            })
        }

    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized token sahi nahi hai'
        })
    }

    const { title } = req.body
    const file = req.file
}



