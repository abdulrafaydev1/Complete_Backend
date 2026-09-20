const express = require('express')

const app = express()
app.use(express.json())

const users = []



app.post('/users', (req, res) => {

    const { username, email, password } = req.body

    const newUser = {
        username,
        email,
        password
    }

    users.push(newUser)

res.status(201).json({
    message: 'user created',
    newUser
})

})
app.get('/fatch-users', (req, res) => {

    res.setHeader('myName', "rafay")
    console.log(req.headers)

    res.status(200).json({
        message: 'this is all users',
        users
    })
})


module.exports = app