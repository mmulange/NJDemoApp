var express = require("express");
var app = express();
var contacts = require("./UserData.js");
var contactsDb = require("./CustomerData.js");

var PORT = process.env.PORT || 8080;

app.get("/API/contact", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(contacts.getContactList());
})

app.get("/API/contactDb", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(contactsDb.getContactListDb());
})

app.set('json spaces', 40);

var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);

})
