const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

    try {

        const { username, email, password } = req.body


        const user = await userModel.create({
            username, email, password
        })

        const isUserAlreadyExists = userModel.findOne({
            email
        })

        if(isUserAlreadyExists){
            return res.status(409).json({
                message: 'user already hai',
 
            })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SERECT)

        res.cookie(
            'token', token 
        )

        res.status(201).json({
            message: 'register successful',
            user,

        })



    } catch (error) {
        console.log(error)

        res.status(400).json({
            message: "koi masla hai",
            error
        })

    }


}

module.exports = { registerUser }
