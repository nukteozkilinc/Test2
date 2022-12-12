# AS_WebApp

Before start you need to do npm install in both folder to download the dependencies.

## Admin user

Para probar la vista de miembro necesitamos autentificarnos con los siguientes credenciales:
 * Usuario: admin
 * Contraseña: admin

## Database

I use PostgreSWL and knex for the connections between server and database.
The name of the database is `postgres` and the user is `postgres` and pasword is `iwximo`.

When we have the database working we can try to do the migrations:
```
cd server/
knex migrate:latest
knex seed:run
```

If `knex` commands are not working we can put `npx` in front of them.

## Start Server

```
cd server/
npm i
nodemon index.js
```

## Start Client

```
cd client/
npm i
npm run serve
```

