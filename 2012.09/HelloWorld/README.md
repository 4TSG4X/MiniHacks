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

5. Visit the [http://localhost:3000](default route) of the server in your browser and you should see something like the this:

	![Hello World](https://raw.github.com/NodePhilly/MiniHacks/master/2012.09/HelloWorld/img/HelloWorld.png)


## "Hello World" With Express

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

7. Visit the [http://localhost:3000](default route) of the server in your browser. You should see the default home page for Express:

	![Hello World With Express](https://raw.github.com/NodePhilly/MiniHacks/master/2012.09/HelloWorld/img/HelloWorldExpress.png)