const express = require("express");
const router = express.Router();
const Contact = require("../models/Contacts");


router.route("/create").post((req, res) => {
    const fname = req.body.fname;
    const surname = req.body.surname;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const newContact = new Contact({
        fname,
        surname,
        email,
        subject,
        message
    });
    newContact.save();
    res.send("contact created")
    console.log("contact created")
})

module.exports = router;