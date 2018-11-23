function User(id, name, email, gender, age) {
    this.id = id || null;
    this.name = name || null;
    this.email = email || null;
    this.gender = gender || null;
    this.age = age || null;
}

User.prototype.getId = function () {
    return this.id;
}

User.prototype.setId = function (id) {
    this.id = id;
}

User.prototype.getName = function () {
    return this.name;
}

User.prototype.setName = function (name) {
    this.name = name;
}

module.exports = User;