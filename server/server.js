const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors);

mongoose.connect("mongodb+srv://kiwisaffa:RB25dett@datacom.0zksk.mongodb.net/contactData?retryWrites=true&w=majority")
console.log("connected to database")

app.use("/", require("./routes/contactRoute"))

app.listen(3002, function() {
  console.log("Server running on port 3002")
});