// Handle standard rest requests
var app = require('./lib/webcontroller.js');

// Handle async socket requests
require('./lib/sockethandler.js')(app);

// Go!
var port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log("Listening on " + port);
});
