const express = require('express')
const route = express.Router()
const controllers = require('./controllers/allControllers')

route.get('/store', controllers.getAll) 
route.get('/store/:id', controllers.getById) 
route.post('/store', controllers.postForm) 
route.put('/store/:id', controllers.putForm) 
route.delete('/store/:id', controllers.deleteForm)

module.exports = route