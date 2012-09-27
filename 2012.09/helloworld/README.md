## Prerequisites

1. Install Node.js	
	* Mac or Windows [Installers](http://nodejs.org/download/)
	* Linux [Package Instructions](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. Pick An Editor
	* Mac: [TextMate](http://macromates.com/), [Sublime](http://www.sublimetext.com/), a million others
	* Windows: [Sublime](http://www.sublimetext.com/), Notepad, a million others
	* Linux: [Sublime](http://www.sublimetext.com/), GEdit (Gnome), a million others

## "Hello World"
1. Create a directory called "hello-world"

	`% mkdir hello-world`

2. Change into the new directory

	`% cd hello-world`

3. Enter the following code into a file called `app.js`:
	
	```javascript
	var http = require('http');
	 
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(3000, '127.0.0.1');
		
	console.log('Server running at http://127.0.0.1:3000/');
	```

4. Open a command prompt or terminal window and run the server:

	`% node app.js`

5. Visit [http://localhost:3000](http://localhost:3000) in your browser. You should see the following:

	![Hello World](https://raw.github.com/NodePhilly/MiniHacks/master/2012.09/HelloWorld/img/HelloWorld.png)


## "Hello World" With [Express](https://github.com/visionmedia/express)

> Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, 
> and hybrid web applications.
>
> ...from the [Project Page](http://expressjs.com/)

1. Install the Expresss module

	`% [sudo] npm install -g express`

2. Create a directory called "hello-world-express"

	`% mkdir hello-world-express`

3. Change into the new directory

	`% cd hello-world-express`

4. Create a new "Express" application inside this new directory

	`% express .`

5. Install dependencies from NPM

	`% npm install`

6. Run the server

	`% node app.js`

7. Visit [http://localhost:3000](http://localhost:3000) in your browser. You should see the following:

	![Hello World With Express](https://raw.github.com/NodePhilly/MiniHacks/master/2012.09/HelloWorld/img/HelloWorldExpress.png)

## "Hello World" With [Restify](https://github.com/mcavage/node-restify)

> Restify is a node.js module built specifically to enable you to build correct REST web services. 
> It borrows heavily from express (intentionally) as that is more or less the de facto API for writing web applications on top of node.js. 
> Express' use case is targeted at browser applications, and contains a lot of functionality (i.e., templating/rendering) to support that. 
> Restify does not. Restify exists to let you build "strict" API services that are maintanable and observable.
> Restify comes with automatic DTrace support for all your handlers, if you're running on a platform that supports DTrace.
>
> ...from the Restify [API-Guide](http://mcavage.github.com/node-restify/)

1. Create a directory called "hello-world-restify"

	`% mkdir hello-world-restify`

2. Change into the new directory

	`% cd hello-world-restify`

3. Install the `Restify` module from `NPM`

	`% npm install restify`

4. Enter the following code into a file called `app.js`:

	```javascript
	var restify = require('restify');

	function respond(req, res, next) {
	  res.send({ result: 'hello ' + req.params.name });
	}

	var server = restify.createServer();
	server.get('/hello/:name', respond);

	server.listen(3000, function() {
	  console.log('%s listening at %s', server.name, server.url);
	});
	```

5. Run the server

	`% node app.js`

6. Visit [http://localhost:3000/hello/world](http://localhost:3000/hello/world) in your browser. You should see the following:

	![Hello World With Restify](https://raw.github.com/NodePhilly/MiniHacks/master/2012.09/HelloWorld/img/HelloWorldRestify.png)