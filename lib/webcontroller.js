var Users = require('./usermodel.js');

var launch = function() {
    // Create express instance
    var app = require('express').createServer();

    // Wire GET paths
    app.get('/online-list', function(req, res) {
        // full list of online members
        res.render('online-list.ejs', {
              layout: false,
              users: Users
        });
    });
    app.get('/embed', function(req, res) {
        // embedded iframe for count display
        res.render('embed.ejs', { layout: false });
    });
    
    return app;
};

module.exports = launch();
