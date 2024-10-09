const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/INotebook";

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(console.log("Mongoose Connected Successfully"));
}

module.exports = connectToMongo;