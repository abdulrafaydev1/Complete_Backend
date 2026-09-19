const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {

    const { username, email, password, role = 'user' } = req.body

    // const checkUserExsits = userModel.findOne({
    //     $or: [
    //         { username },
    //         { email }
    //     ]
    // })

    // if (checkUserExsits) {
    //     return res.status(409).json({
    //         message: 'user already exist'
    //     })
    // }

    const passHast = await bcrypt.hash(password, 10)

    const userCreate = await userModel.create({
        username, email, password: passHast, role
    })

    const token = jwt.sign({
        id: userCreate._id,
        role: userCreate.role
    }, process.env.JWT_SERECT)

    res.cookie('token', token)

    res.status(201).json({
        message: 'user register',
        userCreate
    })

}

module.exports = {registerUser}