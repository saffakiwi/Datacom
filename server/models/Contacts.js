const mongoose = require('mongoose');


const contactSchema = {
 fname: String,
 surname: String,
 email: String,
 subject: String,
 message: String,
}

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact