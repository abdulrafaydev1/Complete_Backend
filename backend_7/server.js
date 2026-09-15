const app = require('./src/app')
const momngoConnect = require('./src/db/db')
momngoConnect()
app.listen(3006, (req, res) => {
    console.log('server is running at port 3006')
})