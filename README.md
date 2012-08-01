Online-js
==========

Pluggable online user counter, deployable straight on Heroku.

This is an entry for [a CloudSpokes challenge](http://www.cloudspokes.com/challenges/1578).

Live presentation: http://cloudspokes-mock.herokuapp.com/?user=atimb

## Features

* The counter only requires insertion of an iframe with a source URL containing the current username in the query
* Therefore no other backend modification is required, other than rendering the username into the iframe URL (backend notifying counter application would slow down response times, because of sync http notifications)
* Inside the iframe a socket.io connection is established with the counter server, which updates all clients in an async manner about joining or disconnecting users
* Clicking the counter text, a popup is opened with a full list of online members, their names used as links to their profiles

## Setup instructions

To use this online user counter on your website, follow these steps:

* Deploy the repository on heroku (see below, suppose your app address is http://xxx.herokuapp.com)
* Insert the following markup into your website (`_USERNAME_` should be substituted by your logic to the logged in user's name)
```
<iframe style="width: 200px; height: 40px; border: 0;" src="http://xxx.herokuapp.com/embed?user=_USERNAME_"></iframe>
```

## Deployment on Heroku

* Issue `heroku apps:create [app-name] --stack cedar` in a terminal, then clone the prompted git URL
* Copy content of this repository to the empty heroku repo
* `git commit -a` and `git push origin master` to push&deploy the repository on heroku

## Run locally

* Install necessary node.js libraries with `npm install`
* Launch the web server with `node ./server.js`

## License

MIT license
