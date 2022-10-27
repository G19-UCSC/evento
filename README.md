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


## Prerequisites
- [PostgreSQL](https://www.postgresql.org/download/windows/)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Server-side(PORT: 5000)

###Set your postgres properties in .env file
```terminal
// in the root level
$ echo "DB_USERNAME = YOUR_DB_USERNAME" >> ./backend/src/.env
$ echo "DB_PASSWORD = YOUR_DB_PASSWORD" >> ./backend/src/.env
$ echo "DB_NAME = YOUR_DB_NAME" >> ./backend/src/.env
$ echo "DB_HOST = YOUR_DB_HOST" >> ./backend/src/.env
$ echo "DB_PORT = YOUR_DB_PORT" >> ./backend/src/.env
$ echo "DIALECT = YOUR_DIALECT" >> ./backend/src/.env
```

### Start
```terminal
$ cd backend   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the backend code to es5 js codes and generate a dist file
```

## Client-side usage(Admin_PORT: 3000, Portal_PORT: 4000)
```terminal
$ cd frontend   // go to client folder
$ npm i       // npm install packages
$ npm run dev // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
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
bootstrap: ^5.1.3|body-parser: ^1.15.2
dotenv: ^16.0.1 | cors: ^2.8.1
next: 12.2.0 | dotenv: ^2.0.0
next-auth: ^4.10.0 | express: ^4.14.0
nodemailer: ^6.7.7 | express-async-handler: ^1.2.0
react: 17.0.0 | joi: ^17.6.0
react-bootstrap-table-next: ^4.0.3 | nodemon: ^2.0.15
react-bootstrap-table2-paginator: ^2.1.2 | pg: ^8.7.3
react-bootstrap-table2-toolkit: ^2.1.3 | pg-hstore: ^2.3.4
react-datepicker: ^4.8.0 | sequelize: ^6.21.3
react-dom: 17.0.0 | colors: ^1.4.0
react-hook-form: ^7.33.1 | concurrently: ^7.1.0
react-icons": ^4.4.0 | 

# Screenshots of this project

User visit public and Home page

User can sign in or sign up

## BUGs or comments

[Create new Issues](https://github.com/G19-UCSC/evento/issues) (preferred)

## Author
[G19-UCSC](https://github.com/G19-UCSC)

### License
MIT
