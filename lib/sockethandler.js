var Users = require('./usermodel.js');

var init = function(app) {
    var io = require('socket.io').listen(app);

    // Heroku cedar stack does not yet support websockets :(
    io.configure(function() { 
        io.set("transports", ["xhr-polling"]); 
        io.set("polling duration", 10); 
    });

    // Client connection
    io.sockets.on('connection', function (socket) {
        // Client provides us the username
        socket.on('user-joined', function(data) {
            // If no name provided, don't add it to list, but send him the status
            if (!data.name) {
                socket.emit('count-update', { count: Users.size });
                return;
            }

            // Add user to list and send update to everyone
            if (Users.add(data.name)) {
                io.sockets.emit('count-update', { count: Users.size });
            } else {
                // or just himself if count did not change
                socket.emit('count-update', { count: Users.size });
            }
  
            // Client disconnects, remove user, and send update to everyone except him
            socket.on('disconnect', function() {
                if (Users.remove(data.name)) {
                    socket.broadcast.emit('count-update', { count: Users.size });
                }
            });
        });
    });
};

module.exports = init;
