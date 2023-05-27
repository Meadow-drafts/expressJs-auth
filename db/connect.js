const mongoose = require("mongoose");


const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName: "task-manager"

  }).then(() => console.log("connected to the db..."))
    .catch((error) => console.log(error));
}

module.exports = connectDB;
