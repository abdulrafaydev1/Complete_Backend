const app = require('./src/app')
const connectdb = require('./src/db/db')
connectdb()

app.listen(4000, () => {
    console.log('server is running on port 4000')
})