const app = require('./src/app')
const mongoConnect = require('./src//db/db')
mongoConnect()

app.listen(3005, () => {
    console.log('server is running at port 3005')
})
