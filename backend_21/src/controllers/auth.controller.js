const userModel = require('../models/user.model')

const registerUser = async (req, res) => {

    const { username, email, password, role = 'user' } = req.body

    const checkUserAlreadyExists = userModel.findOne({
        $or: [
            { username },
            { email },
        ]
    })

    if (checkUserAlreadyExists) {
        return res.status(409).json({
            message: 'user already exists'
        })
    }

    const user = userModel.create({
        username,
        email,
        password,
        role
    })

}

module.exports = {registerUser}