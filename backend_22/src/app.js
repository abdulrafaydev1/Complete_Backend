const express = require('express')

const app = express()
app.use(express.json())

const users = []

app.post('/create-user', (req, res) => {

    const { username, email, password } = req.body

    const newUser = {
        id: users.length + 1,
        username,
        email,
        password
    }

    users.push(newUser)

    res.status(201).json({
        message: 'user created',
        users
    })
})

app.get('/users', (req, res) => {

    res.status(200).json({
        message: 'all users',
        users
    })

})

module.exports = app