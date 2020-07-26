// Where we make our MongoDB connection
const mongoose = require('mongoose');
const config = require('config');   // To be able to get the mongoURI value
const db = config.get('mongoURI');  // Get the mongoURI value

const connectDB = async () => {
    try {
        await mongoose.connect(db,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });     // Since mongoose.connect returns a promise, we want to await for that

        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);    // Exit process with failiure
    }
}
// Usually when you use async/await, you wrap it inside a try/catch block


module.exports = connectDB;
