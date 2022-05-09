const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB Connected...')
    } catch (err) {
        console.log(err); // Mostramos el error
        process.exit(1); // Detenemos la app
    }
}

module.exports = connectDB;