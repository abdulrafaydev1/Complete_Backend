require('dotenv').config()
const app =  require('./src/app')
const mongodbConnect = require('./src/db/db')
mongodbConnect()
app.listen(3010, () => {
    console.log('server is running on port 3010')
})