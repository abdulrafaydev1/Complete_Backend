const userModel = require('../models/user.model')

const registerUser = async (req, res) => {


    const { username, email, password } = req.body


    const user = await userModel.create({
        username, email, password
    })

    res.status(201).json({
        message: 'register successful',
        user
    })


}

module.exports = {registerUser}
