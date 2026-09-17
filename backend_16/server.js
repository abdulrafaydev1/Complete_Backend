require('dotenv').config()
const app = require('./src/app')
const mongodbConnect = require('./src/db/db')
mongodbConnect()

app.listen(3016, () => {
    console.log('server is running oc port 3016')
})