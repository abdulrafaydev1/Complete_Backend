const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')
const uploadFile = require('../services/storage.service')

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

        const { title } = req.body
        const file = req.file

        const result = await uploadFile(file.buffer.toString('base64'))
        console.log("Upload result:", result);

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id
        });

        res.status(201).json({
            message: 'music created',
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: 'Unauthorized token sahi nahi hai',
            error
        })
    }



}

module.exports = { createMusic }


