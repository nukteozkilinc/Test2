var express = require('express')
var jwt = require('jwt-simple')
var moment = require('moment')
var multer = require('multer')
var cors = require('cors')

var app  = express()
app.use(express.json())
app.use(cors())

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'iwximo',
      database : 'postgres'
    }
})

var secret = '35181132177846321494132184547985';

app.listen(3000, function() {
    console.log("El servidor está en el puerto 3000")
})

//---------------------------------------------- Pagination ----------------------------------------------------

async function pagination(table, currentPage, limit, order, search){
    currentPage = parseInt(currentPage)
    limit = parseInt(limit)
    if(!currentPage || currentPage<0){
        currentPage = 1
    }
    if(!limit || limit<0){
        limit = 10
    }
    var offset = ((currentPage - 1) * limit)

    var total = await knex(table).count()
    .modify(function(queryBuilder) {
        if (search != undefined) {
           queryBuilder.whereRaw(`LOWER(${order}) LIKE ?`, [`%${search.toLowerCase()}%`])
        }
    })
    var list = await knex(table)
        .limit(limit)
        .offset(offset)
        .select()
        .orderBy(order)
        .modify(function(queryBuilder) {
            if (search != undefined) {
               queryBuilder.whereRaw(`LOWER(${order}) LIKE ?`, [`%${search.toLowerCase()}%`])
            }
         })

    listCount = await list.length
    total = await total[0].count

    var totalPages = Math.ceil(total / limit)
    var previousPage = 'http://localhost:3000/' + table + '?page=' + (currentPage - 1) + '&limit=' + limit
    var nextPage = 'http://localhost:3000/' + table + '?page=' + (currentPage + 1) + '&limit=' + limit

    return{
        paging: {
            total: total,
            page: currentPage,
            pages: totalPages,
            limit: limit,
            previous: previousPage,
            next: nextPage,
        },
        data: list,
    }
}

//---------------------------------------------- posts ----------------------------------------------------
//View post given an id
app.get('/posts/:id', async function(req,res) {
    var post = await knex('posts').select().where('id',req.params.id)
    res.status(200).send(post)
})

//View list of all posts
app.get('/posts', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search = req.query.search
    res.status(200).send(await pagination('posts', currentPage, limit, 'title', search ))
})

//Create post
//Query returns the new autoincremented id
app.post('/posts', checkJWT, async function(req, res) {
    var post = req.body
    var id = await knex('posts')
        .insert({title: post.title,
                image: post.image,
                description: post.description,
                date: post.date})
        .returning('id')
    res.status(201).send('http://localhost:3000/posts/' + id)
})

//Modify post given an existing one
app.put('/posts', checkJWT, async function(req,res) {
    var post = req.body
    await knex('posts')
        .update({title: post.title,
                image: post.image,
                description: post.description,
                date: post.date})
        .where('id', post.id)
    res.status(201).send('http://localhost:3000/posts/' + post.id)
})

//Deletes post given an id
app.delete('/posts', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('posts').del().where('id', id)
    res.status(200).send('post ' + id + ' deleted succesfully')
})

//---------------------------------------------- projects ---------------------------------------------------------
//View project given an id
app.get('/projects/:id', async function(req,res) {
    var project = await knex('projects').select().where('id',req.params.id)
    res.status(200).send(project)
})

//View list of all projects
app.get('/projects', async function(req,res) {
    var currentPage = req.query.page
    var limit = req.query.limit
    var search  =req.query.search
    res.status(200).send(await pagination('projects', currentPage, limit, 'title', search))
})

//Create project
//Query returns the new autoincremented id
app.post('/projects', checkJWT, async function(req, res) {
    var project = req.body
    var id = await knex('projects')
        .insert({title: post.title,
                image: post.image,
                description: post.description,
                date: post.date})
        .returning('id')
    res.status(201).send('http://localhost:3000/projects/' + id)
})

//Modify project given an existing one
app.put('/projects', checkJWT, async function(req,res) {
    var project = req.body
    await knex('projects')
        .update({title: post.title,
                image: post.image,
                description: post.description,
                date: post.date})
        .where('id', project.id)
    res.status(201).send('http://localhost:3000/projects/' + project.id)
})

//Deletes project given an id
app.delete('/projects', checkJWT, async function(req,res) {
    var id = req.body.id
    await knex('projects').del().where('id', id)
    res.status(200).send('project ' + id + ' deleted succesfully')
})

//---------------------------------------------- Autentification ----------------------------------------------------
app.post('/login', async function(req, res){
    var login = req.body.login
    var password = req.body.password
    var users = await knex('users').select().where('login',login)
    var user = users[0]
    if (user && user.password==password) {
        var payload = {
            login: login,
            exp: moment().add(7, 'days').valueOf()
        }
        var token = jwt.encode(payload, secret)
        res.send({
            user: user.login,
            member: user.member,
            Bearer: token,
        })
    }
    else {
        res.sendStatus(403).end()
    }
})

function getTokenFromAuthHeader(req) {
    var cabecera = req.header('Authorization')
    if (cabecera) {
        var campos = cabecera.split(' ')
        if (campos.length>1 && cabecera.startsWith('Bearer')) {
            return campos[1] 
        }
    }
    return undefined
}

//Middleware
function checkJWT(req, res, next) {

    var token = getTokenFromAuthHeader(req)
    try {
        var decoded = jwt.decode(token, secret);
    }
    catch(error) {
        console.log(error)
    }
    if (decoded!=undefined) {
        next()
    }
    else {
        res.status(403)
        res.send({mensaje: "No tienes permisos"})
    }
}