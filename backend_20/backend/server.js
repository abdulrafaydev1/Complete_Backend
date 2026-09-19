require('dotenv').config()
const app = require('./src/app')
const mongodbConnect = require('./src/db/db')
mongodbConnect()
const port = process.env.PORT

app.listen(port, () => {
    console.log('server is running on port', port)
})