// In-memory database for storing online users in a hashmap
var Users = {
    size: 0,
    list: {},
    // Adds a client user connection, returns false if this connection is not the first one (multiple browser windows open)
    add: function(name) {
        if (!Users.list[name]) {
            Users.size++;
            Users.list[name] = { multiplicity: 1 };
            return true;
        } else {
            Users.list[name].multiplicity++;
        }
        return false;
    },
    // Removes a client user connection, returns false if this connection was not the last one (still some browser window is open)
    remove: function(name) {
        if (Users.list[name].multiplicity === 1) {
            Users.size--;
            delete Users.list[name];
            return true;
        } else {
            Users.list[name].multiplicity--;
        }
        return false;
    }
};

module.exports = Users;
