const app = require('./src/app')
const mongoConnect = require('./src/db/db')

mongoConnect()

app.listen(3004, () => {
    console.log('serevr is running at port 3005')
})

