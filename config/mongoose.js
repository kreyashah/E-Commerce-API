const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

//Connect to the cloud mongo db server
const db = () => {
    mongoose.connect("mongodb+srv://kreya:sDY2eopx2qf8ZTQT@cluster0.y3ra6bz.mongodb.net/Ecommerce_API", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB database with host :: ${con.connection.host}`)
    })
};

module.exports = db;