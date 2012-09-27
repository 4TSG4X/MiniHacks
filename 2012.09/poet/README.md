# Poet minihack

## Set up your project

First things first, make a directory for your new project, and then copy the `views`, `public` and `_posts` directory from the example app. These will just get us started with some templates for our blog, and sample posts so we can see when it's working.

## Set up your package.json


Your [package.json](https://npmjs.org/doc/json.html) is the manifest for your node app. You can manage dependencies and set up meta for publishing to npm, and tie in test scripts and other cool stuff. Check out [npm's resource](https://npmjs.org/doc/json.html) on the package.json file for everything you can put in there.

For now, we'll just start with a basic manifest file with name, version number, specify that this is private (we don't want to accidently publish this to npm!) and our dependencies: [Express](https://github.com/visionmedia/express), [Jade](https://github.com/visionmedia/jade), and [Poet](https://github.com/jsantell/poet). Save this `package.json` in your project's root directory. We'll also add a value for "main" so we can just run our app with `node .`, which looks at our package.json to determine the entry point for our app. Hot, right?

```
{
  "name" : "myPoetMiniHack",
  "version" : "0.0.1",
  "main" : "server.js",
  "private" : true,
  "dependencies" : {
    "poet"    : ">= 0.1.6",
    "jade"    : ">= 0.27.5",
    "express" : "= 3.0.0rc5"
  }
}
```

Note your `package.json` has to be a valid JSON file. The dependencies allow us to grab any version of Poet greater than 0.1.6, and the latest Express version, 3.0.0rc5 (at the time of writing, version 3 of Express is still in release candidate).

Once you have your package json, you can simply install dependencies to your project directory by firing off the `npm install` command. This will install a `node\_modules` directory in your project's directory storing the dependencies you just installed. Modules are small, so we shouldn't worry about having our modules contained locally for each of our projects -- this saves headache and dependency hell down the road when one of our apps is using Express 2.0 and another Express 3.0.

## Setting up the app

So we have our dependencies in our project directory. [Express](http://expressjs.com) is a simple, popular web application framework so we don't have to deal with lower level node modules and we can easily set up routes and content. Leveraging Express, Poet sets up some auto routes for you if you'd like, and interfaces directly with Express. Knowing this, we can set up our `server.js` file in our project root.

```
// server.js
var
  express = require('express'),
  app     = express(),
  poet    = require('poet')( app );
```

So we grab the express module in our `node\_modules` directory, which returns a function that returns an express app object. Poet also is a function that we have to pass in the Express app into to get our Poet interface.

Below our includes, we're going to set up some Express settings with `app.set`.

```
// server.js
var
  express = require('express'),
  app     = express(),
  poet    = require('poet')( app );

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ) );
app.use( app.router );
```

So those new 4 lines, we just set Express to use the Jade templating engine, because it's HAML-like a badass, and our view folder so we can call our view templates without having to specify `/views` everytime.

`app.use` is the middleware for express. Every request that comes in goes through a chain of middleware to determine its end result. Think of it like guitar being plugged into a series of pedal effects. First we include the express static middleware to serve static content in our `/public` directory, like CSS and image files. Then we put the express router at the end to handle the routes we'll define next.

After that, we'll define our main index route and tell Express to listen on port 3000.

```
app.get( '/', function ( req, res ) { res.render( 'test' ); });
app.listen( 3000 );
```

We define the route for when the URL is `/`, or the root and tell the response to render our test view. Since we already set the view engine to jade, we don't need to say `test.jade`, and we also set our view directory to `\_\_dirname + '/views'`, so we also don't need to specify the full path.

## RUN THAT HOTNESS

Okay, so we just got a basic Express app up that should server our `test.jade` file when we go to `localhost:3000`. Let's give it a go by running `node .` in our project's directory and go to `localhost:3000` in your browser.

If everything is going good, you should see the text **HOORAY! EXPRESS IS RUNNING!** -- if not, something is broken :)

## Now time to plugin Poet...

We confirmed that our app is correctly serving up content via Express, but now lets tie in Poet's auto route generation. Right before we set our express variables, lets drop in Poet's autoroutes.

```
poet
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();
```

Perfect. Now let's fire up our app again with `node .` and visit `localhost:3000` -- you should see a listing of a few posts, with tags and categories listed on the side.


## Next

At this point, we have an Express app using Poet's route generators and can start removing the sample posts and adding our own, but we can dig around a bit to see how all this works.

