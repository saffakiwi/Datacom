const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3002


//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//connect to mongodb
mongoose.connect('mongodb+srv://kiwisaffa:RB25dett@contacts.zzg1x.mongodb.net/contactDB?retryWrites=true&w=majority')

//data schema
const contactSchema = {
  fname: String,
  surname: String,
  email: String,
  subject: String,
  message: String
}

//data model
const Contact = mongoose.model("Contact", contactSchema);

//read route
app.get('/contacts', (req, res) => {
  Contact.find()
  .then((contact) => res.json(contact))
  .catch((err) => res.status(400).json('Error: ' + err))
});

//create route
app.post('/contact', (req, res) => {
  const newContact = new Contact({
    fname: req.body.fname,
    surname: req.body.surname,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  })
  newContact.save()
  .then(contact => console.log(contact))
  .catch((err) => res.status(400).json("Error " + err))
})


//delete route


//update route

app.listen(port, function() {
  console.log("server running on port 3002")
})