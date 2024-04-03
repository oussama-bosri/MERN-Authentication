// external imports
const mongoose = require("mongoose");


require('dotenv').config()

async function dbConnect() {
  mongoose.connect("mongodb://127.0.0.1:27017/aece_monitor_db",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
  console.log("Successfully connected to MongoDB");
})
.catch((error) => {
  console.log("Unable to connect to MongoDB ");
  console.error(error);
});
}

module.exports = dbConnect;