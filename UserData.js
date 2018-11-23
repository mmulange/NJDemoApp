var User = require("./User");

var idArr = ["p001", "p002", "p003"];
var nameArr = ["Tom J", "Jason H", "Andrew T"];
var emailArr = ["Tom@gmail.com", "Jason@gmail.com", "Andrew@gmail.com"];
var ageArr = ["50", "16", "20"];
var genderArr = ["Male", "Male", "Female"];

var users = {} // empty Object
var key = 'contacts';
users[key] = []; // empty Array, which you can push() values into


for (var i = 0; i < idArr.length; i++) {
  var user = new User(idArr[i], nameArr[i], emailArr[i], genderArr[i], ageArr[i]);
  users[key].push(user);
}

function getContacts() {
  return users;
}

module.exports = {
  getContactList: getContacts,
};
