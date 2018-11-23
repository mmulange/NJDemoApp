var sql = require("mssql");

var config = {
    server: 'den1.mssql8.gear.host',
    database: 'mysqldbnj',
    user: 'mysqldbnj',
    password: 'Jq018!locHx_'
}

var contacts = {};
var key = "contacts";
contacts[key] = [];

console.log("Database connection init");

sql.connect(config, function (err) {

    if (err) console.log(err);

    console.log("Database connected");

    var request = new sql.Request();

    var sqlQuery = "select * from customer";
    request.query(sqlQuery, function (err, result) {

        if (err) console.log(err);

        result.recordset.forEach(function (element) {
            contacts[key].push(element);
        });

        var data = JSON.stringify(contacts, null, 4);

    });
});

function getContacts() {
    return contacts;
}

console.log(getContacts());

module.exports = {
    getContactListDb: getContacts
}
