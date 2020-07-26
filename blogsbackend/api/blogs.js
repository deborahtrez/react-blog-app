const express = require ('express')
const router = express.Router()
const blogsdata = require('../models/blogsModel')


//get all blogs from the db
router.get('/', (request, response) => {
    blogsdata.find()
    .then (blogs => {response.json(blogs)})
    .catch(error => {response.json(error)})
})

//returns just one blog from the db
router.get('/:id', (request, response) => {
    blogsdata.findById(request.params.id)
    .then (blogs => {response.json(blogs)})
    .catch (error => {response.json(error)})
})

//create new blog
router.post('/create', (request, response) => {
    const createBlog = new blogsdata({
        title:request.body.title,
        article:request.body.article,
        author:request.body.author
    })

    createBlog.save()
    .then (blogs => {response.json(blogs)})
    .catch (error => {response.json(error)})
})

//delete blog by id
router.delete('/:id', (request, response) => {
    blogsdata.findByIdAndDelete(request.params.id)
    .then( () => {response.json('Article has been deleted')})
    .catch(error => {response.json(error)})
})

//update blog by id
router.post('/update:id', (request, response) => {
    blogsdata.findById(request.params.id)
    .then(blogs => {
        blogs.title = request.body.title
        blogs.article = request.body.article
        blogs.author = request.body.author

        blogs.save()
        .then (() => {response.json('Article has been updated')})
    })

    .catch(error => {response.json(error)})
})
  
module.exports = router