const userModel = require('../models/user.models') 

const registerUser = async () => {

    const { username, email, password, role = 'user' } = req.body

    const checkUserExsits = userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    userModel


    
}