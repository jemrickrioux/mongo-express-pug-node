# Welcome to my Express-Mongo-Pug Boilerplate
## Stop fooling around only to start a simple node.js project

I created this stack to facilite the integration of Express web server with a pug template engine and MongoDB Installation from Mlab.

There is alson a json web token integration with a functionning sign in/up/out authentification with session based storage.

It is possible to configure the settings in a config.js file installed.
(This file exports a 'config' object. The settings are set and retrieved via dot notation)
___

### Setting options

`var config = {};`

`config.title = 'My Application Title';`

`config.title = 'My Application Title';`

### Getting options in a node.js file anywhere
Simply require the config object in a variable named how you like. (I named it 'config' to facilitate the comprehension of my code) 

`var config = require('./config.js')`

`[...] return res.render({title: config.title})`

___
### Installing the and starting the stack

`
$ git clone https://github.com/jelecool/mongo-express-pug-node
`

`
$ npm install
`

`
$ npm start
`

Thanks for using my boilerplate. And please, tell me some constructive comments! Safe coding guys!