require('dotenv').config()
const app = require('./src/app')
const mongodbConnect = require('./src/db/db')
mongodbConnect()

app.listen(3013, () => {
    console.log('server is running on port 3013')
})