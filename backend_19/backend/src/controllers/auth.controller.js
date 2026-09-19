const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

    try {
        const { username, email, password } = req.body;

        const userCheck = await userModel.findOne({
            email
        })
        1
        if (userCheck) {
            return res.status(409).json({
                message: 'user already exist'
            })
        } else {

            const user = await userModel.create({
                username, email, password
            })


            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SERECT)

            res.cookie('token', token)

            res.status(201).json({
                message: 'register successful',
                user

            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

module.exports = { registerUser }
