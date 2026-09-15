const mongoose = require('mongoose');

const mongoConnect = async () => {
try {
    await mongoose.connect('mongodb+srv://ar2927748_db_user:3nriYgTz83u27DGJ@cluster0.kwosfac.mongodb.net/')
    console.log('mongodb connected')
} catch (error) {
    console.log(error)
}
}

module.exports = mongoConnect