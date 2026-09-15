const mongoose = require('mongoose');

const momngoConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://ar2927748_db_user:3nriYgTz83u27DGJ@cluster0.kwosfac.mongodb.net/Complete_backend_4')
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = momngoConnect