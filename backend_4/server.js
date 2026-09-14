const app = require('./src/app')
const mongoConnect = require('./src/db/db')
mongoConnect()

app.listen(3003, (req, res) => {
    console.log('server is running at port 3003')
})