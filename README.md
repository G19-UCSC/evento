<h1 align="center">
 Evento, an event planner system.
</h1>
<p align="center">
Evento is an event planner system that is being developed by us G19, a group of undergraduates at UCSC, Sri Lanka as the 3rd year group project.
</p>

## Stack used

> PostgreSQL, Expressjs, Nextjs, Nodejs.


## clone or download
```terminal
$ git clone https://github.com/G19-UCSC/evento.git
$ npm i
```

## project structure
```terminal
backend/
   config/
   src/
      controllers/
      middlewares/
      models/
      routes/
      schema/
      services/
      utilities/
      validators/
      app.js
      controller.js
   package.json
frontend/
   admin/
      components/
      pages/
      public/
      styles/
      utilis/
      package.json
   portal/
      components/
      pages/
      public/
      styles/
      utilis/
      package.json
README.md
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [PostgreSQL](https://www.postgresql.org/download/windows/)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Server usage(PORT: 5000)
```terminal
$ cd code/backend   // go to backe d folder
$ npm i             // npm install packages
$ npm run dev      // run it locally

## Client-side usage(PORT: 3000)
```terminal
$ cd client   // go to client folder
$ npm i       // npm install packages
$ npm run dev // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> ./server/src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
```

### After creating heroku

remember to update the file of [client/webpack.prod.js](https://github.com/amazingandyyy/mern/blob/master/client/webpack.prod.js)
```javascript
 'API_URI': JSON.stringify('https://your-super-amazing-heroku-app.herokuapp.com')
```

# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.1
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router-dom: ^4.2.2 | mongoose: ^4.7.4
redux: ^3.7.2 | morgan: ^1.7.0
redux-thunk: ^2.1.0 |

# Screenshots of this project

User visit public and Home page

User can sign in or sign up

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/amazingandyyy/mern/issues) (preferred)


## Author
[G19-UCSC](https://github.com/G19-UCSC)

### License
