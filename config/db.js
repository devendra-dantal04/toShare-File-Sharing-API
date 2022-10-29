const mongoose = require('mongoose');

const connectDB = () => {
    //Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology : true
    });

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log(`Database Connected...`.brightYellow);
    })

    connection.on('error', console.error.bind(console, "connection error : "));

}

module.exports = connectDB;